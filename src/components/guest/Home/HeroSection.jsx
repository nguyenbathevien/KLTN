import { FiSearch } from "react-icons/fi";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-chart-3 dark:from-gray-800 dark:to-gray-700 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">
            Learn Anything, Anywhere
          </h1>
          <p className="text-xl mb-8 dark:text-gray-200">
            Unlock your potential with our expert-led online courses
          </p>
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for courses..."
              className="w-full px-6 py-4 rounded-lg text-foreground dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
            />
            <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-accent dark:text-gray-400 text-xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
