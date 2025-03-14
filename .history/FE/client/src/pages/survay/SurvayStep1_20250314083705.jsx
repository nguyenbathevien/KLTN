import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="p-6">
      <h2 className="text-2xl font-bold">Bạn quan tâm đến lĩnh vực nào?</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {["Công nghệ", "Kinh tế", "Y học", "Khoa học", "Nghệ thuật"].map(
          (item) => (
            <button
              key={item}
              className={`p-3 border rounded ${
                interests.includes(item)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
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
            </button>
          )
        )}
      </div>
      <button
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleNext}
      >
        Tiếp tục
      </button>
    </div>
  );
};

export default SurveyStep1;
