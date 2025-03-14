import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../components/common/Layout/SurveyLayout";
import SurveyStep1 from "../pages/survay/SurvayStep1";
import SurveyStep2 from "../pages/survay/SurvayStep2";
import SurveyStep3 from "../pages/survay/SurvayStep3";

const SurveyRoutes = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="step1" element={<SurveyStep1 />} />
        <Route path="step2" element={<SurveyStep2 />} />
        <Route path="step3" element={<SurveyStep3 />} />
      </Routes>
    </DashboardLayout>
  );
};

export default SurveyRoutes;
