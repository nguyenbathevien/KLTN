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
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Thanh điều hướng ngang */}
      <nav className="w-full bg-white shadow-md flex justify-center py-4">
        {steps.map((step) => (
          <Link key={step.id} to={step.path} className="relative mx-4">
            <motion.div
              className={`w-4 h-4 rounded-full ${
                location.pathname === step.path
                  ? "bg-primary"
                  : "bg-gray-300 hover:bg-blue-400"
              }`}
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        ))}
      </nav>

      {/* Nội dung chính */}
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
