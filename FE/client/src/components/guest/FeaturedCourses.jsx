import { FaStar } from "react-icons/fa";

const FeaturedCourses = () => {
  // Fake data cho các khóa học nổi bật
  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      price: 89.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613",
    },
    {
      id: 2,
      title: "Digital Marketing Masterclass",
      instructor: "Michael Chen",
      price: 79.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
    {
      id: 3,
      title: "Financial Analysis & Planning",
      instructor: "Emma Wilson",
      price: 94.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
    },
  ];

  return (
    <>
      {/* Featured Courses Section: các khóa học nổi bật */}
      <div className="bg-secondary dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Featured Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-card dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 dark:text-white">
                    {course.title}
                  </h3>
                  <p className="text-accent dark:text-gray-300 mb-4">
                    {course.instructor}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary dark:text-primary-foreground">
                      ${course.price}
                    </span>
                    <div className="flex items-center">
                      <FaStar className="text-chart-4" />
                      <span className="ml-1 dark:text-gray-200">
                        {course.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCourses;
