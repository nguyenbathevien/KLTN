// SurveyStep2.jsx - Trang khảo sát môn học mong muốn
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SurveyStep2 = () => {
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  const handleNext = () => navigate("/survey/step3");
  const handlePrevious = () => navigate("/survey/step1");

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Bạn muốn học môn nào?</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {[
          "Lập trình",
          "Thiết kế",
          "Marketing",
          "Data Science",
          "Quản trị kinh doanh",
        ].map((subject) => (
          <button
            key={subject}
            className={`p-3 border rounded ${
              subjects.includes(subject)
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() =>
              setSubjects((prev) =>
                prev.includes(subject)
                  ? prev.filter((i) => i !== subject)
                  : [...prev, subject]
              )
            }
          >
            {subject}
          </button>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <button
          className="bg-gray-400 text-white px-4 py-2 rounded"
          onClick={handlePrevious}
        >
          Quay lại
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleNext}
        >
          Tiếp tục
        </button>
      </div>
    </div>
  );
};

export default SurveyStep2;
