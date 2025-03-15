import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/common/Layout/ScrollToTop";
import { AuthProvider } from "./contexts/AuthContext";
import Verify from "./pages/auth/Verify";
import AdminRoutes from "./routes/AdminRoutes";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoutes from "./routes/PublicRoutes";
import StudentRoutes from "./routes/StudentRoutes";
import SurveyRoutes from "./routes/SurveyRoutes";
import TeacherRoutes from "./routes/TeacherRoutes";

function App() {
  return (
    <AuthProvider>
      {/* <Router> */}
        <ScrollToTop />
        <Routes>
          {/* Route public */}
          <Route path="/*" element={<PublicRoutes />} />

          {/* Route dashboard student */}
          <Route
            path="/student/*"
            element={
              <PrivateRoute>
                <StudentRoutes />
              </PrivateRoute>
            }
          />

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

           {/* Route dành cho admin  */}
         <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
        <ToastContainer />
      {/* </Router> */}
    </AuthProvider>
  );
}

export default App;
