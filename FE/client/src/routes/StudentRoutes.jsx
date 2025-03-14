import { Route, Routes } from "react-router-dom";
import HomeLayout from "../components/common/Layout/HomeLayout";
import DashboardStudentPage from "../pages/student/DashboardStudent";
import CheckoutPage from "../pages/student/CheckoutPage";
import UserProfilePage from "../pages/student/UserProfilePage";

const StudentRoutes = () => {
  return (
    <HomeLayout>
      <Routes>
        <Route path="dashboard" element={<DashboardStudentPage />} />
        <Route path="account" element={<UserProfilePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Routes>
    </HomeLayout>
  );
};

export default StudentRoutes;
