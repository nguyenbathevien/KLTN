import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const steps = [
  { id: 1, path: "/survey/step1" },
  { id: 2, path: "/survey/step2" },
  { id: 3, path: "/survey/step3" },
];

const DashboardLayout = ({ children }) => {
  const location = useLocation(); // Lấy URL hiện tại

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Thanh điều hướng ngang */}
      <nav className="w-full bg-primary shadow-md flex justify-center py-4">
        {steps.map((step) => (
          <Link key={step.id} to={step.path} className="relative mx-6">
            <motion.div
              className={`w-5 h-5 rounded-full ${
                location.pathname === step.path
                  ? "bg-white border-2 border-white shadow-lg"
                  : "bg-gray-300 hover:bg-white"
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
