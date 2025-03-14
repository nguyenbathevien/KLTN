import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeacherRoutes from "./routes/TeacherRoutes";
import StudentRoutes from "./routes/StudentRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import Verify from "./pages/auth/Verify";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import ScrollToTop from "./components/common/Layout/ScrollToTop";

import SurveyRoutes from "./routes/SurveyRoutes";
// import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Route public */}
          <Route path="/*" element={<PublicRoutes />} />

          {/* Route dashboard student */}
          <Route path="/student/*" element={<StudentRoutes />} />

          <Route path="/verify" element={<Verify />} />
          <Route path="/survey/*" element={<SurveyRoutes />} />
          {/* Thêm route cho giảng viên với PrivateRoute */}
          <Route
            path="/instructor/*"
            element={
              // <PrivateRoute> dòng này để bảo vệ dashboard teacer phải đăng nhập thì mới vào được( giờ tạm tắt để css )
              <TeacherRoutes />
              // </PrivateRoute>
            }
          />
        </Routes>
      </Router>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
