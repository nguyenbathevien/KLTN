import { Route, Routes, useLocation } from "react-router-dom";
import HomeLayout from "../components/common/Layout/HomeLayout";
import HomePage from "../pages/guest/Home/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import Register from "../pages/auth/Register";
import CourseCatalogPage from "../pages/guest/CourseCatalog/CourseCatalogPage";
import CourseDetailPage from "../pages/guest/CourseDetail/CourseDetailPage";

const PublicRoutes = () => {
  const location = useLocation();
  const isAuthRoute =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {isAuthRoute ? (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <HomeLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CourseCatalogPage />} />
            <Route path="/course/:id" element={<CourseDetailPage />} />
          </Routes>
        </HomeLayout>
      )}
    </>
  );
};

export default PublicRoutes;
