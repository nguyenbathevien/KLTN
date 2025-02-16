import { useState } from "react";
import { FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const courseDetails = {
  id: 1,
  title: "Complete Web Development Bootcamp",
  instructor: "Sarah Johnson",
  price: 89.99,
  rating: 4.8,
  students: 15000,
  hours: 42,
  lessons: 148,
  level: "Beginner to Advanced",
  lastUpdated: "January 2024",
  description:
    "Master web development from scratch with this comprehensive bootcamp. Learn HTML, CSS, JavaScript, React, Node.js, and more.",
  image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613",
  topics: [
    "HTML5 & CSS3 Fundamentals",
    "JavaScript ES6+",
    "React.js",
    "Node.js & Express",
    "MongoDB",
    "REST APIs",
    "Authentication & Security",
    "Deployment & DevOps",
  ],
  requirements: [
    "Basic computer knowledge",
    "No prior programming experience needed",
    "Willingness to learn and practice",
  ],
};

const courses = [
  courseDetails,
  {
    ...courseDetails,
    id: 2,
    title: "UI/UX Design Masterclass",
    instructor: "John Smith",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
  },
  {
    ...courseDetails,
    id: 3,
    title: "Digital Marketing 101",
    instructor: "Emma Wilson",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d",
  },
  {
    ...courseDetails,
    id: 4,
    title: "Python Programming Advanced",
    instructor: "Michael Chen",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
  },
  {
    ...courseDetails,
    id: 5,
    title: "Data Science Fundamentals",
    instructor: "Lisa Anderson",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    ...courseDetails,
    id: 6,
    title: "Mobile App Development",
    instructor: "David Kim",
    price: 94.99,
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
  },
  {
    ...courseDetails,
    id: 7,
    title: "Artificial Intelligence Basics",
    instructor: "Rachel Singh",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b",
  },
  {
    ...courseDetails,
    id: 8,
    title: "Graphic Design for Beginners",
    instructor: "Tom Wilson",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d",
  },
  {
    ...courseDetails,
    id: 9,
    title: "JavaScript for Experts",
    instructor: "Anna Lee",
    price: 84.99,
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a",
  },
  {
    ...courseDetails,
    id: 10,
    title: "Cybersecurity Essentials",
    instructor: "Mark Thompson",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
  },
  {
    ...courseDetails,
    id: 11,
    title: "Cloud Computing AWS",
    instructor: "Sarah Miller",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  },
  {
    ...courseDetails,
    id: 12,
    title: "Business Analytics",
    instructor: "James Wilson",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    ...courseDetails,
    id: 13,
    title: "Machine Learning",
    instructor: "Elena Rodriguez",
    price: 94.99,
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b",
  },
  {
    ...courseDetails,
    id: 14,
    title: "DevOps Fundamentals",
    instructor: "Chris Baker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    ...courseDetails,
    id: 15,
    title: "Blockchain Development",
    instructor: "Alex Turner",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
  },
  {
    ...courseDetails,
    id: 15,
    title: "Blockchain Development",
    instructor: "Alex Turner",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
  },
];
const CourseListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <div className="bg-gradient-to-r from-primary to-chart-3 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Explore Courses
          </h1>
          <p className="text-gray-100 mb-8">
            Discover your next learning adventure
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-96">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 mb-8">
          <select
            className="bg-white dark:bg-gray-800 border border-gray-200 rounded-lg px-4 py-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="programming">Programming</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
          </select>
          <select
            className="bg-white dark:bg-gray-800 border border-gray-200 rounded-lg px-4 py-2"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <select
            className="bg-white dark:bg-gray-800 border border-gray-200 rounded-lg px-4 py-2"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="popular">Most Popular</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course) => (
            <Link
              to={`/course/${course.id}`}
              key={course.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 h-[228px] flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {course.instructor}
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="dark:text-gray-200">
                        {course.rating}
                      </span>
                    </div>
                    <span className="font-bold text-primary dark:text-primary-foreground">
                      ${course.price}
                    </span>
                  </div>
                  <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <nav className="flex items-center space-x-2">
            <button className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200">
              <FiChevronLeft className="text-gray-600" />
            </button>
            <button className="px-4 py-2 rounded-lg bg-primary text-white">
              1
            </button>
            <button className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200">
              2
            </button>
            <button className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200">
              3
            </button>
            <button className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200">
              <FiChevronRight className="text-gray-600" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CourseListPage;
