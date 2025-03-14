import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const subjectsList = [
  "Quản trị kinh doanh",
  "Tài chính",
  "Kế toán",
  "Marketing",

  "Thiết kế đồ họa",
  "Âm nhạc",
  "Thời trang",

  "Trí tuệ nhân tạo (AI)",
  "Khoa học máy tính",
  "Vật lý",
  "Toán ứng dụng",

  "Y khoa",
  "Dược học",
  "Thể thao & Sức khỏe",

  "Luật",
  "Khoa học chính trị",
  "Xã hội học",
  "Triết học",
  "Ngôn ngữ học",

  "Kỹ thuật cơ khí",
  "Kỹ thuật điện",
  "Xây dựng",
  "Kiến trúc",
];

const SurveyStep2 = () => {
  const navigate = useNavigate();

  // Lưu môn học đã chọn
  const [subjects, setSubjects] = useState(() => {
    return JSON.parse(localStorage.getItem("subjects")) || [];
  });

  // Giá trị nhập vào của "Khác..."
  const [customSubject, setCustomSubject] = useState("");

  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subjects));
  }, [subjects]);

  const handleNext = () => navigate("/survey/step3");
  const handlePrevious = () => navigate("/survey/step1");

  return (
    <div className="flex flex-col min-h-screen p-12">
      {/* Tiêu đề */}
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
        Bạn muốn học môn nào?
      </h2>

      {/* Danh sách môn học */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-auto w-full max-w-6xl">
        {subjectsList.map((subject) => (
          <motion.button
            key={subject}
            whileTap={{ scale: 0.9 }}
            className={`p-4 border rounded-lg text-center font-medium transition duration-300 ${
              subjects.includes(subject)
                ? "bg-primary text-white shadow-lg"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() =>
              setSubjects((prev) =>
                prev.includes(subject)
                  ? prev.filter((s) => s !== subject)
                  : [...prev, subject]
              )
            }
          >
            {subject}
          </motion.button>
        ))}
      </div>

      {/* Nhập môn học khác */}
      <div className="flex items-center justify-center mt-6 space-x-4">
        <input
          type="text"
          placeholder="Nhập môn khác..."
          value={customSubject}
          onChange={(e) => setCustomSubject(e.target.value)}
          className="p-3 border rounded-lg w-72 focus:ring focus:ring-primary"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition"
          onClick={() => {
            if (customSubject.trim() && !subjects.includes(customSubject)) {
              setSubjects([...subjects, customSubject.trim()]);
              setCustomSubject(""); // Reset input
            }
          }}
        >
          Thêm
        </motion.button>
      </div>

      {/* Nút điều hướng */}
      <div className="fixed bottom-6 left-6 flex gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gray-500 text-white px-8 py-4 rounded-lg font-semibold shadow-md transition"
          onClick={handlePrevious}
        >
          Quay lại
        </motion.button>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold shadow-md transition"
        onClick={handleNext}
      >
        Tiếp tục
      </motion.button>
    </div>
  );
};

export default SurveyStep2;
