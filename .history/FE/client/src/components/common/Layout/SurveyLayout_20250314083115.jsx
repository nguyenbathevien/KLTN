import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const steps = [
  { id: 1, name: "Sở thích học tập", path: "/survey/step1" },
  { id: 2, name: "Môn học mong muốn", path: "/survey/step2" },
  { id: 3, name: "Mục tiêu học tập", path: "/survey/step3" },
];

const DashboardLayout = ({ children }) => {
  const location = useLocation(); // Lấy URL hiện tại

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
              className={`block px-4 py-2 rounded-lg transition duration-200 ${
                location.pathname === step.path
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-200"
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
