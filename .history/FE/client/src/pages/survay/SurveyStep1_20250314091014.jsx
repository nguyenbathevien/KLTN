import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const interestsList = [
  "Công nghệ",
  "Kinh tế",
  "Y học",
  "Khoa học",
  "Nghệ thuật",
  "Thể thao",
  "Giáo dục",
  "Du lịch",
  "Tâm lý học",
  "Kỹ thuật",
  "Lập trình",
  "Marketing",
  "Âm nhạc",
  "Nhiếp ảnh",
  "Thiết kế",
];

const SurveyStep1 = () => {
  const navigate = useNavigate();

  // Lấy dữ liệu từ localStorage (nếu có)
  const [interests, setInterests] = useState(() => {
    return JSON.parse(localStorage.getItem("interests")) || [];
  });

  useEffect(() => {
    localStorage.setItem("interests", JSON.stringify(interests));
  }, [interests]);

  const handleNext = () => navigate("/survey/step2");

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Bạn quan tâm đến lĩnh vực nào?
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {interestsList.map((item) => (
          <motion.button
            key={item}
            whileTap={{ scale: 0.9 }}
            className={`p-3 border rounded-lg text-center font-medium transition duration-300 ${
              interests.includes(item)
                ? "bg-primary text-white shadow-lg"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() =>
              setInterests((prev) =>
                prev.includes(item)
                  ? prev.filter((i) => i !== item)
                  : [...prev, item]
              )
            }
          >
            {item}
          </motion.button>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition"
          onClick={handleNext}
        >
          Tiếp tục
        </motion.button>
      </div>
    </div>
  );
};

export default SurveyStep1;
