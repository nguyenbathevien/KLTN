import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../components/common/Layout/SurveyLayout";

const  App() {
  return (
    <Router>
      <Routes>
        <Route path="/survey/*" element={<DashboardLayout />}>
          {/* <Route path="step1" element={<SurveyStep1 />} />
          <Route path="step2" element={<SurveyStep2 />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
