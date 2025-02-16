import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-card dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to={"/"}
          className="text-2xl font-bold text-primary dark:text-primary-foreground"
        >
          V-Learning
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to={"/courses"} className="text-foreground hover:text-primary">
            Courses
          </Link>
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
        <Link
          to={"/login"}
          className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Header;
