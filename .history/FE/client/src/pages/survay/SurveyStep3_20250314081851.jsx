// SurveyStep3.jsx - Trang khảo sát mục tiêu học tập
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SurveyStep3 = () => {
  const [goal, setGoal] = useState("");
  const navigate = useNavigate();

  const handlePrevious = () => navigate("/survey/step2");
  const handleSubmit = () => {
    alert("Cảm ơn bạn đã hoàn thành khảo sát!");
    navigate("/");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Mục tiêu học tập của bạn là gì?</h2>
      <textarea
        className="w-full p-3 border rounded mt-4"
        placeholder="Hãy chia sẻ mục tiêu học tập của bạn..."
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <div className="mt-4 flex justify-between">
        <button
          className="bg-gray-400 text-white px-4 py-2 rounded"
          onClick={handlePrevious}
        >
          Quay lại
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          Hoàn tất
        </button>
      </div>
    </div>
  );
};

export default SurveyStep3;
