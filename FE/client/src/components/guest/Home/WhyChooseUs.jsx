import { FaClock, FaUserTie, FaCertificate } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <>
      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <FaClock className="text-5xl text-primary dark:text-primary-foreground mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2 dark:text-white">
              Learn at Your Own Pace
            </h3>
            <p className="text-accent dark:text-gray-300">
              Flexible learning schedule that fits your lifestyle
            </p>
          </div>
          <div className="text-center">
            <FaUserTie className="text-5xl text-primary dark:text-primary-foreground mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2 dark:text-white">
              Expert-led Courses
            </h3>
            <p className="text-accent dark:text-gray-300">
              Learn from industry professionals
            </p>
          </div>
          <div className="text-center">
            <FaCertificate className="text-5xl text-primary dark:text-primary-foreground mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2 dark:text-white">
              Certified Learning
            </h3>
            <p className="text-accent dark:text-gray-300">
              Earn certificates upon completion
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
