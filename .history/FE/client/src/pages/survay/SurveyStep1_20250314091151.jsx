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
    <div className="flex flex-col justify-between min-h-screen p-12">
      {/* Tiêu đề */}
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Bạn quan tâm đến lĩnh vực nào?
      </h2>

      {/* Danh sách lựa chọn */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-auto w-full max-w-5xl">
        {interestsList.map((item) => (
          <motion.button
            key={item}
            whileTap={{ scale: 0.9 }}
            className={`p-4 border rounded-lg text-center font-medium transition duration-300 ${
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

      {/* Nút Tiếp tục */}
      <div className="flex justify-center mt-12">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold shadow-md transition"
          onClick={handleNext}
        >
          Tiếp tục
        </motion.button>
      </div>
    </div>
  );
};

export default SurveyStep1;
