import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiHeart, FiBell, FiMenu, FiShoppingCart, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-primary">V-Learning</div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to={"/"} className="text-foreground hover:text-primary">
              Home
            </Link>
            <Link
              to={"/courses"}
              className="text-foreground hover:text-primary"
            >
              Courses
            </Link>
            <a href="#" className="text-foreground hover:text-primary">
              Categories
            </a>
            <a href="#" className="text-foreground hover:text-primary">
              About Us
            </a>
            <a href="#" className="text-foreground hover:text-primary">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="p-2 rounded-full hover:bg-muted">
                <FiHeart className="w-5 h-5" />
              </button>
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
              <div className="absolute right-0 mt-2 w-72 bg-card rounded-md shadow-lg py-1 hidden group-hover:block before:content-[''] before:absolute before:-top-3 before:right-0 before:w-72 before:h-8 before:bg-transparent">
                <div className="p-4 text-sm text-foreground">
                  <h3 className="font-semibold mb-2">Favorite Courses</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
                        className="w-10 h-10 rounded object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-medium">Web Development Bootcamp</p>
                        <p className="text-accent text-xs">$99.99</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="p-2 rounded-full hover:bg-muted">
                <FiBell className="w-5 h-5" />
              </button>
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                5
              </span>
              <div className="absolute right-0 mt-2 w-80 bg-card rounded-md shadow-lg py-1 hidden group-hover:block before:content-[''] before:absolute before:-top-3 before:right-0 before:w-72 before:h-8 before:bg-transparent">
                <div className="p-4 text-sm text-foreground">
                  <h3 className="font-semibold mb-2">Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 p-2 hover:bg-muted rounded-md">
                      <div className="flex-1">
                        <p>New course available: Advanced React Patterns</p>
                        <p className="text-accent text-xs">2 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="p-2 rounded-full hover:bg-muted">
                <FiShoppingCart className="w-5 h-5" />
              </button>
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
              <div className="absolute right-0 mt-2 w-72 bg-card rounded-md shadow-lg py-1 hidden group-hover:block before:content-[''] before:absolute before:-top-3 before:right-0 before:w-72 before:h-8 before:bg-transparent">
                <div className="p-4 text-sm text-foreground">
                  <h3 className="font-semibold mb-2">Shopping Cart</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                        className="w-10 h-10 rounded object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-medium">Data Science Fundamentals</p>
                        <p className="text-accent text-xs">$89.99</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex justify-between mb-2">
                      <span>Total:</span>
                      <span className="font-semibold">$269.97</span>
                    </div>
                    <button className="w-full bg-primary text-white rounded-md py-2 text-sm font-medium hover:bg-opacity-90">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="p-2 rounded-full hover:bg-muted"
              >
                <FaRegUser className="w-5 h-5" />
              </button>
              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-card rounded-md shadow-lg py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                  >
                    Profile Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                  >
                    My Courses
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-muted"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <Link
              to={"/"}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-foreground hover:text-primary"
            >
              Home
            </Link>
            <Link
              to={"/courses"}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-foreground hover:text-primary"
            >
              Courses
            </Link>
            <a
              href="#"
              className="block py-2 text-foreground hover:text-primary"
            >
              Categories
            </a>
            <a
              href="#"
              className="block py-2 text-foreground hover:text-primary"
            >
              About Us
            </a>
            <a
              href="#"
              className="block py-2 text-foreground hover:text-primary"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
