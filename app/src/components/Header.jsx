import { Link } from "react-router-dom";

function Header() {
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
            <ul className="flex gap-10">
              <li className="relative group">
                <button
                  aria-expanded="false"
                  aria-haspopup="menu"
                  aria-controls="individual-menu"
                  id="individual-button"
                  className="inline-flex items-center gap-1 text-medium-gray hover:text-dark-blue font-medium cursor-pointer text-sm"
                >
                  Individual
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="mt-0.5"
                  >
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Drop down menu - Updated Styles */}
                <div
                  id="individual-menu"
                  role="menu"
                  aria-labelledby="individual-button"
                  className="absolute top-full left-0 z-50 hidden group-hover:flex flex-col gap-2 p-6 bg-white rounded-xl shadow-xl border border-gray-50 w-[380px] animate-appear"
                >
                  {/* Dollar Card */}
                  <a
                    href="/products/virtual-dollar-card"
                    role="menuitem"
                    className="flex gap-4 items-center p-2 rounded-lg hover:bg-gray-50 transition-all group/item"
                  >
                    <div className="h-10 w-10 shrink-0 bg-[#FCE7D2] rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 512 512"
                        fill="#D97706"
                      >
                        <rect
                          x="64"
                          y="128"
                          width="384"
                          height="256"
                          rx="40"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-primary-navy text-sm">
                        Dollar Card
                      </p>
                      <p className="text-xs text-medium-gray">
                        Shop locally & Pay globally
                      </p>
                    </div>
                  </a>

                  {/* Airtime to cash */}
                  <a
                    href="/products/airtime-to-cash"
                    role="menuitem"
                    className="flex gap-4 items-center p-2 rounded-lg hover:bg-gray-50 transition-all group/item"
                  >
                    <div className="h-10 w-10 shrink-0 bg-[#E1F7E1] rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#22C55E]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-primary-navy text-sm">
                        Airtime to cash
                      </p>
                      <p className="text-xs text-medium-gray">
                        Convert airtime to cash instantly
                      </p>
                    </div>
                  </a>

                  {/* Gift Card */}
                  <a
                    href="/products/gift-card"
                    role="menuitem"
                    className="flex gap-4 items-center p-2 rounded-lg hover:bg-gray-50 transition-all group/item"
                  >
                    <div className="h-10 w-10 shrink-0 bg-[#F3F8C4] rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#A3A113]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.5 2.5 0 00-5-0c0 .35.07.69.18 1H11c.11-.31.18-.65.18-1a2.5 2.5 0 00-5 0c0 .35.07.69.18 1H4a2 2 0 00-2 2v12c0 1.1.9 2 2 2h16a2 2 0 002-2V8a2 2 0 00-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-primary-navy text-sm">
                        Gift Card
                      </p>
                      <p className="text-xs text-medium-gray">
                        Purchase over 5,000+ gift cards
                      </p>
                    </div>
                  </a>

                  {/* Pay bills */}
                  <a
                    href="/products/pay-bills"
                    role="menuitem"
                    className="flex gap-4 items-center p-2 rounded-lg hover:bg-gray-50 transition-all group/item"
                  >
                    <div className="h-10 w-10 shrink-0 bg-[#D7F7F8] rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#06B6D4]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2zm0-4H7V7h10v2zm0 8H7v-2h10v2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-primary-navy text-sm">
                        Pay bills
                      </p>
                      <p className="text-xs text-medium-gray">
                        Buy Cheap Data, Electricity, TV, Airtime & more
                      </p>
                    </div>
                  </a>
                </div>
              </li>{" "}
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

        <button className="lg:hidden block p-2 ml-auto">
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
        </button>

        <div className="hidden absolute top-full left-0 z-30 w-full bg-white shadow-lg flex-col items-center py-6 gap-6 lg:hidden animate-appear">
          <div className="flex flex-col items-center gap-4 text-xl font-medium">
            <a href="#">Individual</a>
            <a href="#">Business</a>
            <a href="#">Blog</a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full px-5">
            <a
              href="/login"
              className="w-full sm:w-auto text-center bg-primary-blue text-white px-8 py-3 rounded-full font-bold"
            >
              Login
            </a>
            <a
              href="/signup"
              className="w-full sm:w-auto text-center bg-primary-navy text-white px-8 py-3 rounded-full font-bold"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
