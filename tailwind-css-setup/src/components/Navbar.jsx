import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiSun, HiMoon } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const location = useLocation();

  // Effect to apply the theme and background color when darkMode state changes
  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      body.style.backgroundColor = "#1a202c"; // Dark background color
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      body.style.backgroundColor = "#f7fafc"; // Light background color
    }
  }, [darkMode]);

  return (
    <nav className="bg-blue-700 dark:bg-gray-900 text-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h2 className="text-2xl font-bold tracking-wide"><img src="https://i.ibb.co/Zp7gqP9g/images-2.png" alt="Logo" className="w-20 h-13"/>
        </h2>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {["Home", "About", "Feature", "Contact"].map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.toLowerCase()}`}
                className={`hover:text-gray-300 transition duration-300 ${
                  location.pathname === `/${item.toLowerCase()}`
                    ? "border-b-2 border-white pb-1"
                    : ""
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle (Desktop) */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hidden md:block text-white text-2xl mr-4"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <HiSun /> : <HiMoon />}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-blue-800 dark:bg-gray-800 transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          {["Home", "About", "Feature", "Contact"].map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-lg hover:text-gray-300 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}

          {/* Dark Mode Toggle in Mobile */}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-white text-2xl"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <HiSun /> : <HiMoon />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
