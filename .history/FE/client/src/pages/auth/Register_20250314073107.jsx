import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import axios from "axios";
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
        const response = await axios.post(
          "http://localhost:8080/v1/email/register",
          { loginName: formData.email },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        );
        if (response.data)
          navigate("/verify", { state: { email: formData.email } });
      } catch (error) {
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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden lg:block lg:w-1/2 h-screen"
      >
        <Swiper
          autoplay={{ delay: 3500 }}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
          className="h-full"
        >
          {[
            "/images/slide1.jpg",
            "/images/slide2.jpg",
            "/images/slide3.jpg",
          ].map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt="Slide"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex items-center justify-center min-h-screen bg-white px-6"
      >
        <div className="w-full max-w-md">
          <h2 className="text-center text-3xl font-bold">
            Sign up and start learning
          </h2>
          <button className="w-full flex justify-center items-center px-4 py-2 border rounded bg-white hover:bg-gray-50 mt-6">
            <FaGoogle className="h-5 w-5 text-red-500 mr-2" /> Continue with
            Google
          </button>
          <div className="relative flex items-center mt-6">
            <div className="w-full border-t" />
            <span className="px-2 bg-white text-gray-500">or</span>
          </div>
          <form className="mt-6 space-y-4" onSubmit={handleSignup}>
            {["fullName", "email", "password"].map((field, i) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <input
                  type={field === "password" ? "password" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className="w-full px-3 py-2 border rounded"
                />
                {errors[field] && (
                  <p className="text-red-500 text-sm">{errors[field]}</p>
                )}
              </motion.div>
            ))}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              {isSubmitting ? "Sending email verification..." : "Sign up"}
            </button>
          </form>
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-red-500">
              Log in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
