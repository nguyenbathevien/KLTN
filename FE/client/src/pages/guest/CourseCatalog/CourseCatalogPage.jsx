import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiSearch } from "react-icons/fi";
import { FaStar, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    price: 89.99,
    rating: 4.8,
    students: 15000,
    hours: 42,
    topic: "Web Development",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613",
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    instructor: "Mike Chen",
    price: 129.99,
    rating: 4.9,
    students: 8000,
    hours: 28,
    topic: "Frontend",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  },
  {
    id: 3,
    title: "Python for Data Science",
    instructor: "Emma Watson",
    price: 99.99,
    rating: 4.7,
    students: 12000,
    hours: 35,
    topic: "Data Science",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
  },
  {
    id: 4,
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    price: 89.99,
    rating: 4.8,
    students: 15000,
    hours: 42,
    topic: "Web Development",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613",
  },
  {
    id: 5,
    title: "Advanced React Patterns",
    instructor: "Mike Chen",
    price: 129.99,
    rating: 4.9,
    students: 8000,
    hours: 28,
    topic: "Frontend",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  },
  {
    id: 6,
    title: "Python for Data Science",
    instructor: "Emma Watson",
    price: 99.99,
    rating: 4.7,
    students: 12000,
    hours: 35,
    topic: "Data Science",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
  },
  {
    id: 7,
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    price: 89.99,
    rating: 4.8,
    students: 15000,
    hours: 42,
    topic: "Web Development",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613",
  },
  {
    id: 8,
    title: "Advanced React Patterns",
    instructor: "Mike Chen",
    price: 129.99,
    rating: 4.9,
    students: 8000,
    hours: 28,
    topic: "Frontend",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  },
  {
    id: 9,
    title: "Python for Data Science",
    instructor: "Emma Watson",
    price: 99.99,
    rating: 4.7,
    students: 12000,
    hours: 35,
    topic: "Data Science",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
  },
  {
    id: 10,
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    price: 89.99,
    rating: 4.8,
    students: 15000,
    hours: 42,
    topic: "Web Development",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613",
  },
  {
    id: 11,
    title: "Advanced React Patterns",
    instructor: "Mike Chen",
    price: 129.99,
    rating: 4.9,
    students: 8000,
    hours: 28,
    topic: "Frontend",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  },
  {
    id: 12,
    title: "Python for Data Science",
    instructor: "Emma Watson",
    price: 99.99,
    rating: 4.7,
    students: 12000,
    hours: 35,
    topic: "Data Science",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
  },
];

const categories = [
  "Web Development",
  "Frontend",
  "Backend",
  "Data Science",
  "Mobile Development",
];
const levels = ["Beginner", "Intermediate", "Advanced"];
const priceRanges = ["All", "Under $50", "$50-$100", "$100-$150", "Over $150"];

const CourseCatalogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedRating, setSelectedRating] = useState(0);

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || course.topic === selectedCategory;
    const matchesLevel =
      selectedLevel === "All" || course.level === selectedLevel;
    const matchesRating = course.rating >= selectedRating;
    const matchesPrice =
      selectedPrice === "All" ||
      (selectedPrice === "Under $50" && course.price < 50) ||
      (selectedPrice === "$50-$100" &&
        course.price >= 50 &&
        course.price <= 100) ||
      (selectedPrice === "$100-$150" &&
        course.price > 100 &&
        course.price <= 150) ||
      (selectedPrice === "Over $150" && course.price > 150);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesLevel &&
      matchesRating &&
      matchesPrice
    );
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <div className="mx-auto mb-8">
        <div className="bg-gradient-to-r from-primary to-chart-3 dark:from-gray-800 dark:to-gray-700">
          <div className="container mx-auto px-4 py-12 mb-8">
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 mx-8">
          <select
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <option value="All">All Levels</option>
            {levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>

          <select
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
          >
            {priceRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>

          <div className="flex items-center gap-2">
            <span className="text-gray-600 dark:text-gray-300">
              Min Rating:
            </span>
            <select
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              value={selectedRating}
              onChange={(e) => setSelectedRating(Number(e.target.value))}
            >
              <option value="0">All</option>
              <option value="4">4+ Stars</option>
              <option value="4.5">4.5+ Stars</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-8">
          {filteredCourses.map((course) => (
            <Link
              to={`/course/${course.id}`}
              key={course.id}
              className="bg-white h-96 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 h-48 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2 dark:text-white">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    {course.instructor}
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="text-sm dark:text-white">
                      {course.rating}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                      ({course.students.toLocaleString()} students)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">
                      ${course.price}
                    </span>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <FaClock className="mr-1" />
                      {course.hours}h
                    </div>
                  </div>
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

export default CourseCatalogPage;
