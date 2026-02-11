import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleLogin(formData) {
    const user = {
      email: formData.get("email"),
    };

    login(user);
    navigate("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      {/* Left Section - 40% */}
      <section className="hidden lg:flex lg:basis-2/5 items-center justify-center bg-primary-blue lg:pl-16 lg:pr-30 relative overflow-hidden">
        {/* Text Content */}
        <div className="flex flex-col gap-8 z-10 max-w-80">
          <div className="flex items-center gap-2 mb-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.789.422a4.001 4.001 0 0 0-3.578 0l-8 4A4.0011 4.0011 0 0 0 0 8v8c0 1.515.856 2.9 2.211 3.578l8 4a4.001 4.001 0 0 0 3.578 0l8-4A4.0011 4.0011 0 0 0 24 16V8c0-1.515-.856-2.9-2.211-3.578l-8-4ZM8 8c0-2.209 1.791-4 4-4s4 1.791 4 4v8c0 2.209-1.791 4-4 4s-4-1.791-4-4V8Zm6 0c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2Z" />
            </svg>
            <span className="text-2xl font-bold text-white">figur</span>
          </div>
          <h1 className="text-white font-bold text-3xl 2xl:text-4xl leading-tight">
            More than a digital payment
          </h1>
          <p className="text-white text-xs leading-relaxed">
            Experience seamless accessibility to pay bills, open personal &
            business bank accounts, track revenue & more on one platform.
          </p>
        </div>

        {/* The Background SVG from your public folder */}
        <div className="absolute bottom-0 left-0 max-w-sm pointer-events-none">
          <img
            src="/images/bg-feature.svg"
            alt="Background cascade boxes"
            className="w-full h-auto object-cover opacity-50"
          />
        </div>
      </section>

      {/* Right Section - 60% */}
      <section className="flex-1 lg:basis-3/5 bg-white flex flex-col items-center justify-center px-8 py-12">
        <div className="w-full max-w-md">
          <div className="mb-10 text-left">
            <p className="text-gray-500 font-medium">Login</p>
            <h2 className="text-2xl font-bold text-[#0D1B3E]">Welcome Back</h2>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            {/* Email Field */}
            <div className="relative border border-gray-200 rounded-lg focus-within:border-blue-600 transition-all">
              <input
                type="email"
                name="email"
                placeholder=" "
                className="block px-4 pt-6 pb-2 w-full text-gray-900 bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 peer"
                required
              />
              <label className="absolute text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-blue-600">
                Email Address
              </label>
            </div>

            {/* Password Field */}
            <div className="relative border-2 border-blue-600 rounded-lg">
              <input
                type="password"
                name="password"
                placeholder=" "
                className="block px-4 pt-6 pb-2 w-full text-gray-900 bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 peer"
                required
              />
              <label className="absolute text-white bg-blue-600 px-1 rounded text-xs px-2 duration-300 transform -translate-y-7 scale-100 top-4 z-10 origin-[0] left-3">
                Password
              </label>
              <div className="absolute right-4 top-4 text-gray-400 cursor-pointer">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>

            <div className="text-center">
              <a
                href="#"
                className="text-[#0052FF] font-semibold text-sm underline underline-offset-4"
              >
                Forgot Password
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2970FF] text-white py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              Login
            </button>

            <div className="text-center mt-4">
              <p className="text-[#0D1B3E] font-medium">
                I don't have an account
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
