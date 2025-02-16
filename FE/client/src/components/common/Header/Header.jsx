import logo from "../../../assets/images/logo.png";

const Header = () => {
  return (
    <nav className="bg-card dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* <img
          src={logo}
          alt="V-Learning Logo"
          className="h-12 cursor-pointer bg-primary"
        /> */}
        <h1 className="text-2xl font-bold text-primary dark:text-primary-foreground">
          V-Learning
        </h1>
        <div className="hidden md:flex space-x-6">
          <a
            href="#"
            className="text-foreground dark:text-gray-200 hover:text-primary dark:hover:text-primary-foreground"
          >
            Courses
          </a>
          <a
            href="#"
            className="text-foreground dark:text-gray-200 hover:text-primary dark:hover:text-primary-foreground"
          >
            Categories
          </a>
          <a
            href="#"
            className="text-foreground dark:text-gray-200 hover:text-primary dark:hover:text-primary-foreground"
          >
            About
          </a>
          <a
            href="#"
            className="text-foreground dark:text-gray-200 hover:text-primary dark:hover:text-primary-foreground"
          >
            Contact
          </a>
        </div>
        <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-opacity-90 dark:hover:bg-opacity-80">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Header;
