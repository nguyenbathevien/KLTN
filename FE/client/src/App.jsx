import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./components/common/Layout/HomeLayout";
import CourseDetailPage from "./pages/guest/CourseDetail/CourseDetailPage";
import HomePage from "./pages/guest/Home/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import CourseListPage from "./pages/guest/CourseList/CourseListPage";

function App() {
  return (
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
              <CourseListPage />
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
      </Routes>
    </Router>
  );
}

export default App;
