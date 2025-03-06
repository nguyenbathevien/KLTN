import { Route, Routes } from "react-router-dom";
import HomeLayout from "../components/common/Layout/HomeLayout";
import DashboardStudentPage from "../pages/student/DashboardStudent";

const StudentRoutes = () => {
  return (
    <HomeLayout>
      <Routes>
        <Route path="dashboard" element={<DashboardStudentPage />} />
      </Routes>
    </HomeLayout>
  );
};

export default StudentRoutes;
