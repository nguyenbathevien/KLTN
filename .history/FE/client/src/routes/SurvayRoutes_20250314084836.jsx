import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../components/common/Layout/SurveyLayout";
import SurveyStep1 from "../pages/survay/SurvayStep1";
import SurveyStep2 from "../pages/survay/SurvayStep2";

const SurvayRoutes = () => {
  return (
    <Routes>
      <Route path="/survey/*" element={<DashboardLayout />}>
        <Route path="step1" element={<SurveyStep1 />} />
        <Route path="step2" element={<SurveyStep2 />} />
      </Route>
    </Routes>
  );
};
export default SurvayRoutes;
