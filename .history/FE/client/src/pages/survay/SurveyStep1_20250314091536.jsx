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
  "Ngôn ngữ",
  "Lịch sử",
  "Triết học",
  "Môi trường",
  "Quản trị kinh doanh",
];

const SurveyStep1 = () => {
  const navigate = useNavigate();

  // Lấy dữ liệu từ localStorage
  const [interests, setInterests] = useState(() => {
    return JSON.parse(localStorage.getItem("interests")) || [];
  });

  // Giá trị nhập vào của "Khác..."
  const [customInterest, setCustomInterest] = useState("");

  useEffect(() => {
    localStorage.setItem("interests", JSON.stringify(interests));
  }, [interests]);

  const handleNext = () => navigate("/survey/step2");

  return (
    <div className="flex flex-col h-screen p-12 relative">
      {/* Tiêu đề */}
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">
        Bạn quan tâm đến lĩnh vực nào?
      </h2>

      {/* Danh sách lựa chọn */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-auto w-full max-w-6xl">
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

      {/* Nhập môn học khác */}
      <div className="flex items-center justify-center mt-4 space-x-4">
        <input
          type="text"
          placeholder="Nhập môn khác..."
          value={customInterest}
          onChange={(e) => setCustomInterest(e.target.value)}
          className="p-3 border rounded-lg w-72 focus:ring focus:ring-primary"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition"
          onClick={() => {
            if (customInterest.trim() && !interests.includes(customInterest)) {
              setInterests([...interests, customInterest.trim()]);
              setCustomInterest(""); // Reset input
            }
          }}
        >
          Thêm
        </motion.button>
      </div>

      {/* Nút Tiếp tục ở góc phải dưới cùng */}
      <div className="absolute bottom-6 right-6">
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
