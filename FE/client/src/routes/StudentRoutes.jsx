import { Route, Routes } from "react-router-dom";
import HomeLayout from "../components/common/Layout/HomeLayout";
import DashboardStudentPage from "../pages/student/DashboardStudent";
import CartPage from "../pages/student/CartPage";

const StudentRoutes = () => {
  return (
    <HomeLayout>
      <Routes>
        <Route path="dashboard" element={<DashboardStudentPage />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
    </HomeLayout>
  );
};

export default StudentRoutes;
