import {
  FaLaptopCode,
  FaBriefcase,
  FaPaintBrush,
  FaBullhorn,
  FaUserGraduate,
  FaChartLine,
  FaCamera,
  FaHeartbeat,
} from "react-icons/fa";

const PopularCategories = () => {
  // Fake data cho các danh mục
  const categories = [
    { icon: FaLaptopCode, name: "Technology" },
    { icon: FaBriefcase, name: "Business" },
    { icon: FaPaintBrush, name: "Design" },
    { icon: FaBullhorn, name: "Marketing" },
    { icon: FaUserGraduate, name: "Personal Development" },
    { icon: FaChartLine, name: "Finance" },
    { icon: FaCamera, name: "Photography" },
    { icon: FaHeartbeat, name: "Health & Fitness" },
  ];

  return (
    <>
      {/* Popular Categories Section: các danh mục phổ biến */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-card dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer text-center"
            >
              <category.icon className="text-4xl text-primary dark:text-primary-foreground mx-auto mb-4" />
              <h3 className="font-semibold dark:text-gray-200">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularCategories;
