import logo from "../../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-card dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary dark:text-primary-foreground">
          V-Learning
        </h1>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-foreground hover:text-primary">
            Courses
          </a>
          <a href="#" className="text-foreground hover:text-primary">
            Categories
          </a>
          <a href="#" className="text-foreground hover:text-primary">
            About
          </a>
          <a href="#" className="text-foreground hover:text-primary">
            Contact
          </a>
        </div>
        <button
          onClick={() => navigate("/login")} // Chuyển hướng đến trang đăng nhập
          className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Header;
