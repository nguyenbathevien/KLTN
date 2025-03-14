// DashboardLayout.js
import { useState } from "react";
import SurveyInterest from "./SurveyInterest";
import SurveySubjects from "./SurveySubjects";
import SurveyNavigation from "./SurveyNavigation";

const DashboardLayout = () => {
  const [step, setStep] = useState(0);
  const surveys = [<SurveyInterest />, <SurveySubjects />];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Khảo Sát Học Tập</h1>
      <div className="w-full max-w-2xl p-4 border rounded shadow-md bg-white">
        {surveys[step]}
        <SurveyNavigation step={step} setStep={setStep} maxSteps={surveys.length} />
      </div>
    </div>
  );
};

export default DashboardLayout;

// SurveyInterest.js
const SurveyInterest = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Bạn quan tâm đến lĩnh vực nào?</h2>
      <ul className="mt-4 space-y-2">
        <li><input type="checkbox" /> Lập trình</li>
        <li><input type="checkbox" /> Thiết kế</li>
        <li><input type="checkbox" /> Marketing</li>
        <li><input type="checkbox" /> Kinh doanh</li>
      </ul>
    </div>
  );
};
export default SurveyInterest;

// SurveySubjects.js
const SurveySubjects = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Bạn muốn học môn nào?</h2>
      <ul className="mt-4 space-y-2">
        <li><input type="checkbox" /> ReactJS</li>
        <li><input type="checkbox" /> Python</li>
        <li><input type="checkbox" /> UX/UI Design</li>
        <li><input type="checkbox" /> Quản lý dự án</li>
      </ul>
    </div>
  );
};
export default SurveySubjects;

// SurveyNavigation.js
const SurveyNavigation = ({ step, setStep, maxSteps }) => {
  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={() => setStep(step - 1)}
        disabled={step === 0}
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <button
        onClick={() => setStep(step + 1)}
        disabled={step === maxSteps - 1}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};
export default SurveyNavigation;
