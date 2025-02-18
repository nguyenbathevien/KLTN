import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./components/common/Layout/HomeLayout";
import CourseDetailPage from "./pages/guest/CourseDetail/CourseDetailPage";
import HomePage from "./pages/guest/Home/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import TeacherRoutes from "./routes/TeacherRoutes";
import { AuthProvider } from "./contexts/AuthContext";
import CourseCatalogPage from "./pages/guest/CourseCatalog/CourseCatalogPage";
import StudentRoutes from "./routes/StudentRoutes";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomeLayout>
                {/* Trang chủ */}
                <HomePage />
              </HomeLayout>
            }
          />
          {/* Các route khác có thể được thêm vào đây */}
          <Route path="/login" element={<LoginPage />} />
          {/* Danh sách các khóa học */}
          <Route
            path="/courses"
            element={
              <HomeLayout>
                <CourseCatalogPage />
              </HomeLayout>
            }
          />
          {/* Đây là route dẫn tới trang chi tiết khóa học (khi click vào khóa học) */}
          <Route
            path="/course/:id"
            element={
              <HomeLayout>
                <CourseDetailPage />
              </HomeLayout>
            }
          />

          {/* Route dashboard student */}
          <Route path="/student/*" element={<StudentRoutes />} />

          {/* Thêm route cho giảng viên với PrivateRoute */}
          <Route
            path="/teacher/*"
            element={
              // <PrivateRoute> dòng này để bảo vệ dashboard teacer phải đăng nhập thì mới vào được( giờ tạm tắt để css )
              <TeacherRoutes />
              // </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
