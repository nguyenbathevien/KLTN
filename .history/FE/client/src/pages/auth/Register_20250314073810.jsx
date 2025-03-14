import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const URL_BACKEND = "http://localhost:8080/v1/email/register";
        const data = {
          loginName: formData.email,
        };
        const config = {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await axios.post(URL_BACKEND, data, config);

        if (response.data) {
          navigate("/verify", {
            state: {
              email: formData.email,
            },
          });
        }
      } catch (error) {
        console.error("Registration error:", error);
        setErrors({
          submit:
            error.response?.data?.message ||
            "Registration failed. Please try again.",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const slides = [
    {
      image: "https://source.unsplash.com/800x600/?learning",
      title: "Learn from the best instructors",
      description:
        "Join our community of expert instructors and passionate learners",
    },
    {
      image: "https://source.unsplash.com/800x600/?education",
      title: "Learn at your own pace",
      description:
        "Access courses anytime, anywhere, and learn at your convenience",
    },
    {
      image: "https://source.unsplash.com/800x600/?books",
      title: "Diverse course selection",
      description: "Choose from thousands of courses in various fields",
    },
  ];

  return (
    <div className="flex h-screen">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden lg:block lg:w-1/2 h-screen"
      >
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center px-12 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-lg md:text-xl text-white/90">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex items-center justify-center min-h-screen bg-white px-4 sm:px-6 lg:px-8"
      >
        <div className="w-full max-w-md space-y-8">
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Sign up and start learning
          </h2>
          <form className="mt-6 space-y-6" onSubmit={handleSignup}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              placeholder="Full name"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-4 bg-[#E41E3F] text-white rounded hover:bg-[#C41E3F]"
            >
              {isSubmitting ? "Sending email verification..." : "Sign up"}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
