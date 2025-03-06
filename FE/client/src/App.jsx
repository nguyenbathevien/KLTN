import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeacherRoutes from "./routes/TeacherRoutes";
import { AuthProvider } from "./contexts/AuthContext";
import StudentRoutes from "./routes/StudentRoutes";
import PublicRoutes from "./routes/PublicRoutes";
// import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Route public */}
          <Route path="/*" element={<PublicRoutes />} />

          {/* Route dashboard student */}
          <Route path="/student/*" element={<StudentRoutes />} />

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
    </AuthProvider>
  );
}

export default App;
