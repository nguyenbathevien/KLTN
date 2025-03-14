import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const preferences = [
  "Web Development",
  "Data Science",
  "Machine Learning",
  "Cybersecurity",
  "Cloud Computing",
  "Mobile Development",
  "Graphic Design",
  "Digital Marketing",
  "Business & Entrepreneurship",
];

const SurveyPage = () => {
  const navigate = useNavigate();
  const [selectedPreferences, setSelectedPreferences] = useState([]);

  const togglePreference = (preference) => {
    setSelectedPreferences((prev) =>
      prev.includes(preference)
        ? prev.filter((item) => item !== preference)
        : [...prev, preference]
    );
  };

  const handleSubmit = () => {
    console.log("User preferences:", selectedPreferences);
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
          What do you want to learn?
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Select your interests to personalize your learning experience.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {preferences.map((preference) => (
            <button
              key={preference}
              className={`px-4 py-2 rounded-lg border ${
                selectedPreferences.includes(preference)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => togglePreference(preference)}
            >
              {preference}
            </button>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-[#E41E3F] text-white py-2 px-4 rounded hover:bg-[#C41E3F]"
        >
          Continue
        </button>
      </motion.div>
    </div>
  );
};

export default SurveyPage;
