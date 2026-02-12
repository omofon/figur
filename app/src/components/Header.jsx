import { Link } from "react-router-dom";
import { useState } from "react"; // Added useState

function Header() {
  // 1. Add state to track if the menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2. Function to toggle the state
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white shadow-2xs container-padding py-4">
      <div className="flex items-center w-full relative">
        <div className="flex items-center justify-between gap-10">
          <a href="/" className="flex items-center mr-5 gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#0052FF"
              role="img"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="logo-title">figur logo</title>
              <path d="M13.789.422a4.001 4.001 0 0 0-3.578 0l-8 4A4.0011 4.0011 0 0 0 0 8v8c0 1.515.856 2.9 2.211 3.578l8 4a4.001 4.001 0 0 0 3.578 0l8-4A4.0011 4.0011 0 0 0 24 16V8c0-1.515-.856-2.9-2.211-3.578l-8-4ZM8 8c0-2.209 1.791-4 4-4s4 1.791 4 4v8c0 2.209-1.791 4-4 4s-4-1.791-4-4V8Zm6 0c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2Z" />
            </svg>
            <span className="text-3xl font-bold text-primary-navy">figur</span>
          </a>

          <nav
            id="navbar"
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-3"
          >
            {/* ... (Your existing desktop nav code remains the same) */}
            <ul className="flex gap-10">
              <li className="relative group">
                {/* ... Individual button and dropdown */}
              </li>
              <li>
                <a
                  href="/business"
                  className="text-medium-gray hover:text-dark-blue text-sm"
                >
                  Business
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-medium-gray hover:text-dark-blue text-sm"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hidden lg:flex items-center space-x-2 ml-auto">
          <Link
            to="/login"
            className="bg-primary-blue text-white px-3 py-2 rounded-full hover:bg-blue-hover text-sm"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-primary-navy text-white px-3 py-2 rounded-full hover:bg-navy-hover text-sm"
          >
            Sign Up
          </Link>
        </div>

        {/* 3. Add onClick to the Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden block p-2 ml-auto cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            /* X Icon when open */
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#001B44"
              strokeWidth="1.5"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            /* Hamburger Icon when closed */
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="#001B44"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 7L7 7M20 7L11 7"
                stroke="#001b44"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M20 17H17M4 17L13 17"
                stroke="#001b44"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M4 12H7L20 12"
                stroke="#001b44"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>

        {/* 4. Use a template literal to toggle the 'hidden' class */}
        <div
          className={`${isMenuOpen ? "flex" : "hidden"} absolute top-full left-0 z-30 w-full bg-white shadow-lg flex-col items-center py-6 gap-6 lg:hidden animate-appear`}
        >
          <div className="flex flex-col items-center gap-4 text-xl font-medium">
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Individual
            </a>
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Business
            </a>
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Blog
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full px-5">
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="w-full sm:w-auto text-center bg-primary-blue text-white px-8 py-3 rounded-full font-bold"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsMenuOpen(false)}
              className="w-full sm:w-auto text-center bg-primary-navy text-white px-8 py-3 rounded-full font-bold"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
