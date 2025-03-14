import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const steps = [
  { id: 1, name: "Sở thích học tập", path: "/survey/step1" },
  { id: 2, name: "Môn học mong muốn", path: "/survey/subjects" },
  { id: 3, name: "Mục tiêu học tập", path: "/survey/goals" },
];

const DashboardLayout = ({ children }) => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white p-6 shadow-md">
        <h2 className="text-xl font-bold text-gray-700 mb-6">
          Khảo sát học tập
        </h2>
        <nav className="space-y-4">
          {steps.map((step) => (
            <Link
              key={step.id}
              to={step.path}
              onClick={() => setActiveStep(step.id)}
              className={`block px-4 py-2 rounded-lg transition duration-200 text-gray-700 ${
                activeStep === step.id
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {step.name}
            </Link>
          ))}
        </nav>
      </aside>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 p-8 overflow-auto"
      >
        {children}
      </motion.main>
    </div>
  );
};

export default DashboardLayout;
