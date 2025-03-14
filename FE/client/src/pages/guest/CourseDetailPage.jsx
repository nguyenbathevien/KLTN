import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStar,
  FaPlay,
  FaChevronDown,
  FaChevronUp,
  FaUserGraduate,
  FaClock,
} from "react-icons/fa";

const CourseDetailPage = () => {
  const { id } = useParams();
  const [expandedSection, setExpandedSection] = useState(null);
  const [studentCount, setStudentCount] = useState(0);

  const course = {
    title: "Advanced Web Development Masterclass",
    subtitle: "Master Modern Web Technologies",
    description:
      "Comprehensive course covering the latest web development technologies, best practices, and industry standards.",
    rating: 4.8,
    originalPrice: 199.99,
    discountedPrice: 89.99,
    enrolled: 15000,
    instructor: {
      name: "Dr. Sarah Johnson",
      credentials: "PhD in Computer Science",
      bio: "10+ years of industry experience in web development and software architecture.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    curriculum: [
      {
        title: "Introduction to Web Development",
        duration: "2 hours",
        lectures: 8,
        preview: true,
      },
      {
        title: "Advanced JavaScript Concepts",
        duration: "4 hours",
        lectures: 12,
        preview: false,
      },
      {
        title: "Frontend Frameworks",
        duration: "6 hours",
        lectures: 15,
        preview: false,
      },
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStudentCount((prev) =>
        prev < course.enrolled ? prev + 100 : course.enrolled
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const handleEnroll = (course) => {
    localStorage.setItem("enrolledCourse", JSON.stringify([course]));
  };

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[400px]"
      >
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Course Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              {course.title}
            </motion.h1>
            <p className="text-xl text-white/90 mb-6">{course.subtitle}</p>
            <div className="flex items-center gap-4 text-white mb-6">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < Math.floor(course.rating)
                      ? "text-yellow-400"
                      : "text-gray-400"
                  }
                />
              ))}
              <span className="ml-2">{course.rating}</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card p-6 rounded-lg shadow-sm mb-8"
          >
            <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
            <p className="text-accent-foreground">{course.description}</p>
          </motion.section>

          <motion.section className="bg-card p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
            {course.curriculum.map((section, index) => (
              <motion.div
                key={index}
                className="border-b border-border last:border-0"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full py-4 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-medium">{section.title}</span>
                    {section.preview && (
                      <span className="text-xs bg-primary text-white px-2 py-1 rounded">
                        Preview
                      </span>
                    )}
                  </div>
                  {expandedSection === index ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
                <AnimatePresence>
                  {expandedSection === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 bg-muted rounded-lg mb-4">
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-2">
                            <FaClock />
                            {section.duration}
                          </span>
                          <span className="flex items-center gap-2">
                            <FaPlay />
                            {section.lectures} lectures
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.section>

          <motion.section className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Instructor</h2>
            <div className="flex items-center gap-6">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={course.instructor.image}
                alt={course.instructor.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">{course.instructor.name}</h3>
                <p className="text-accent mb-2">
                  {course.instructor.credentials}
                </p>
                <p className="text-accent-foreground">
                  {course.instructor.bio}
                </p>
              </div>
            </div>
          </motion.section>
        </div>

        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card p-6 rounded-lg shadow-sm sticky top-24"
          >
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl font-bold">
                  ${course.discountedPrice}
                </span>
                <span className="text-xl text-accent line-through">
                  ${course.originalPrice}
                </span>
              </div>
              <div className="bg-destructive text-white text-sm py-1 px-3 rounded-full inline-block">
                55% OFF - Limited Time
              </div>
            </div>

            <button
              onClick={() => handleEnroll(course)}
              className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors mb-6"
            >
              Enroll Now
            </button>

            <div className="flex items-center gap-2 justify-center text-accent mb-6">
              <FaUserGraduate />
              <motion.span>
                {studentCount.toLocaleString()} students enrolled
              </motion.span>
            </div>

            <div className="w-full bg-muted rounded-full h-2 mb-6">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                className="bg-primary h-full rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
