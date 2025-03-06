const Footer = () => {
  return (
    <footer className="bg-card dark:bg-gray-800 text-foreground dark:text-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4 dark:text-white">
              V-Learning
            </h3>
            <p className="text-accent dark:text-gray-300">
              Empowering minds through online education
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-accent dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-accent dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-accent dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 dark:text-white">Support</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-accent dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-accent dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-accent dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 dark:text-white">Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md border border-input dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-opacity-90 dark:hover:bg-opacity-80">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-border dark:border-gray-700 mt-8 pt-8 text-center text-accent dark:text-gray-400">
          <p>&copy; 2025 V-Learning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
