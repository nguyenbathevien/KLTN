import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./components/common/Layout/HomeLayout";
import HomePage from "./pages/guest/HomePage";
import LoginPage from "./components/login/LoginPage";

function App() {
  return (
    <Router>
      <HomeLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Các route khác có thể được thêm vào đây */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </HomeLayout>
    </Router>
  );
}

export default App;
