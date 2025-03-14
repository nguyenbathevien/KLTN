import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStar,
  FaSearch,
  FaFilter,
  FaTimes,
  FaClock,
  FaUser,
  FaChartBar,
} from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    duration: "12 weeks",
    level: "Intermediate",
    price: 99.99,
    description:
      "Comprehensive web development course covering HTML, CSS, and JavaScript.",
    rating: 4.8,
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Advanced Machine Learning",
    instructor: "Dr. Michael Chen",
    duration: "16 weeks",
    level: "Advanced",
    price: 149.99,
    description:
      "Deep dive into machine learning algorithms and neural networks.",
    rating: 4.9,
    category: "Data Science",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    instructor: "Emily Parker",
    duration: "8 weeks",
    level: "Beginner",
    price: 79.99,
    description: "Learn the basics of user interface and experience design.",
    rating: 4.7,
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    duration: "12 weeks",
    level: "Intermediate",
    price: 99.99,
    description:
      "Comprehensive web development course covering HTML, CSS, and JavaScript.",
    rating: 4.8,
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Advanced Machine Learning",
    instructor: "Dr. Michael Chen",
    duration: "16 weeks",
    level: "Advanced",
    price: 149.99,
    description:
      "Deep dive into machine learning algorithms and neural networks.",
    rating: 4.9,
    category: "Data Science",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "UI/UX Design Fundamentals",
    instructor: "Emily Parker",
    duration: "8 weeks",
    level: "Beginner",
    price: 79.99,
    description: "Learn the basics of user interface and experience design.",
    rating: 4.7,
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

const CourseCard = ({ course }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ scale: 1.02 }}
      className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="relative pb-[60%]">
        <img
          src={course.image}
          alt={course.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-[228px]">
        <div>
          <h3 className="text-lg font-heading text-foreground mb-2">
            {course.title}
          </h3>
          <div className="flex items-center mb-2 text-sm text-accent">
            <FaUser className="mr-2" />
            <span>{course.instructor}</span>
          </div>
          <div className="flex items-center mb-2 text-sm text-accent">
            <FaClock className="mr-2" />
            <span>{course.duration}</span>
            <FaChartBar className="ml-4 mr-2" />
            <span>{course.level}</span>
          </div>
        </div>
        <div>
          <p className="text-sm text-accent-foreground mb-3">
            {course.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaStar className="text-chart-4" />
              <span className="ml-1 text-sm text-accent">{course.rating}</span>
            </div>
            <span className="font-bold text-primary">${course.price}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CourseListingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "all",
    level: "all",
    priceRange: "all",
  });
  const [showFilters, setShowFilters] = useState(false);

  const filteredCourses = courses.filter((course) => {
    return (
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.category === "all" || course.category === filters.category) &&
      (filters.level === "all" || course.level === filters.level) &&
      (filters.priceRange === "all" ||
        (filters.priceRange === "free" && course.price === 0) ||
        (filters.priceRange === "paid" && course.price > 0))
    );
  });

  return (
    <div className="bg-background p-4 md:p-8 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Section */}
          <motion.div
            className={`md:w-64 bg-card p-4 rounded-lg ${
              showFilters ? "block" : "hidden md:block"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-heading">Filters</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="md:hidden text-accent hover:text-accent-foreground"
              >
                <FaTimes />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Category
                </label>
                <select
                  className="w-full p-2 border rounded-sm bg-muted"
                  value={filters.category}
                  onChange={(e) =>
                    setFilters({ ...filters, category: e.target.value })
                  }
                >
                  <option value="all">All Categories</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Design">Design</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Level</label>
                <select
                  className="w-full p-2 border rounded-sm bg-muted"
                  value={filters.level}
                  onChange={(e) =>
                    setFilters({ ...filters, level: e.target.value })
                  }
                >
                  <option value="all">All Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Price</label>
                <select
                  className="w-full p-2 border rounded-sm bg-muted"
                  value={filters.priceRange}
                  onChange={(e) =>
                    setFilters({ ...filters, priceRange: e.target.value })
                  }
                >
                  <option value="all">All Prices</option>
                  <option value="free">Free</option>
                  <option value="paid">Paid</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-10 pr-4 py-2 border rounded-sm bg-muted"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent" />
              </div>
              <button
                onClick={() => setShowFilters(true)}
                className="md:hidden mt-4 flex items-center text-accent hover:text-accent-foreground"
              >
                <FaFilter className="mr-2" /> Show Filters
              </button>
            </div>

            <AnimatePresence>
              {filteredCourses.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-8 text-accent"
                >
                  No courses found matching your criteria
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseListingPage;
