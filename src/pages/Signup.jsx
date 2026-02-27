import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const { signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleGoogle() {
    setError("");
    try {
      await loginWithGoogle();
      navigate("/dashboard");
    } catch (err) {
      if (err.code !== "auth/popup-closed-by-user") {
        setError(getSignupError(err.code));
      }
    }
  }

  function togglePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }
  function toggleConfirmVisibility() {
    setIsConfirmVisible(!isConfirmVisible);
  }

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (form.password.length < 8)
      return "Password must be at least 8 characters.";
    if (form.password !== form.confirm) return "Passwords do not match";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationError = validate();
    if (validationError) return setError(validationError);

    setError("");
    setLoading(true);
    try {
      await signup(form.email, form.password, form.name);
      navigate("/dashboard");
    } catch (err) {
      setError(getSignupError(err.code));
    } finally {
      setLoading(false);
    }
  }

  // Password strength helper
  function getStrength(pw) {
    if (pw.length === 0) return 0;
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    if (/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(pw)) score++;
    return score;
  }
  const strength = getStrength(form.password);
  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong", "Excellent"][
    strength
  ];

  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      {/* Left Section - 40% (Exact match to Login) */}
      <section className="hidden lg:flex lg:basis-2/5 items-center justify-center bg-primary-blue lg:pl-16 lg:pr-30 relative overflow-hidden">
        {/* Text Content  */}
        <div className="flex flex-col gap-8 z-10 max-w-80">
          <Link to="/" className="flex items-center gap-2 mb-2">
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
          </Link>
          <h1 className="text-white font-bold text-3xl 2xl:text-4xl leading-tight">
            More than a digital payment
          </h1>
          <p className="text-white text-xs leading-relaxed">
            Experience seamless accessibility to pay bills, open personal &
            business bank accounts, track revenue & more on one platform.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 max-w-sm pointer-events-none">
          <img
            src="/images/bg-feature.svg"
            alt="Background"
            className="w-full h-auto object-cover opacity-50"
          />
        </div>
      </section>

      {/* Right Section - 60% */}
      <section className="flex-1 lg:basis-3/5 bg-white flex flex-col items-center justify-center px-8 py-12">
        <div className="w-full max-w-md">
          <div className="mb-10 text-left">
            <p className="text-primary-navy text-xs">Register</p>
            <h2 className="text-base font-medium text-primary-navy">
              Create an Account
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {/* Error Message */}
            {error && (
              <div className="self-end">
                <span className="text-xs font-medium text-red-500 pointer-events-none text-right">
                  {error}
                </span>
              </div>
            )}

            {/* Name Field */}
            <div
              className={`relative border rounded-lg transition-all ${error.name ? "border-red-500" : "border-gray-200 focus-within:border-blue-600"}`}
            >
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder=" "
                className="block px-4 pt-5 pb-1 w-full text-sm text-gray-900 bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 peer"
                required
              />
              <label className="absolute text-xs text-gray-400 duration-300 transform left-4 z-10 origin-left top-1/2 -translate-y-1/2 scale-100 peer-focus:top-2 peer-focus:-translate-y-1.5 peer-focus:text-blue-600 peer-focus:scale-90 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:scale-90">
                Name
              </label>
            </div>

            {/* Email Field */}
            <div
              className={`relative border rounded-lg transition-all ${error.email ? "border-red-500" : "border-gray-200 focus-within:border-blue-600"}`}
            >
              <input
                type="email"
                name="email"
                placeholder=" "
                value={form.email}
                onChange={handleChange}
                className="block px-4 pt-5 pb-1 w-full text-sm text-gray-900 bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 peer"
                required
              />
              <label className="absolute text-xs text-gray-400 duration-300 transform left-4 z-10 origin-left top-1/2 -translate-y-1/2 scale-100 peer-focus:top-2 peer-focus:-translate-y-1.5 peer-focus:text-blue-600 peer-focus:scale-90 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:scale-90">
                Email
              </label>
            </div>

            {/* Password Field */}
            <div
              className={`relative border rounded-lg transition-all ${error.password ? "border-red-500" : "border-gray-200 focus-within:border-blue-600"}`}
            >
              <input
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                placeholder=" "
                value={form.password}
                onChange={handleChange}
                className="block px-4 pr-10 pt-5 pb-1 w-full text-sm text-gray-900 bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 peer"
                required
              />
              <label className="absolute text-xs text-gray-400 duration-300 transform left-4 z-10 origin-left top-1/2 -translate-y-1/2 scale-100 peer-focus:top-2 peer-focus:-translate-y-1.5 peer-focus:text-blue-600 peer-focus:scale-90 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:scale-90">
                Password
              </label>
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"
              >
                {isPasswordVisible ? (
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Strength bar */}
            {form.password && (
              <div className="strength-bar">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className={`bar-segment`}
                    style={{
                      background:
                        n <= strength
                          ? ["", "#ef4444", "#f97316", "#eab308", "#22c55e"][
                              strength
                            ]
                          : "#333",
                    }}
                  />
                ))}
                <span>{strengthLabel}</span>
              </div>
            )}

            {/* Confirm Password Field */}
            <div
              className={`relative border rounded-lg transition-all ${error.password ? "border-red-500" : "border-gray-200 focus-within:border-blue-600"}`}
            >
              <input
                type={isConfirmVisible ? "text" : "password"}
                name="confirm"
                placeholder=" "
                value={form.confirm}
                onChange={handleChange}
                className="block px-4 pr-10 pt-5 pb-1 w-full text-sm text-gray-900 bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 peer"
                required
              />
              <label className="absolute text-xs text-gray-400 duration-300 transform left-4 z-10 origin-left top-1/2 -translate-y-1/2 scale-100 peer-focus:top-2 peer-focus:-translate-y-1.5 peer-focus:text-blue-600 peer-focus:scale-90 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:scale-90">
                Confirm Password
              </label>
              <button
                type="button"
                onClick={toggleConfirmVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"
              >
                {isConfirmVisible ? (
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 bg-[#2260FF] text-white py-3 rounded-full text-sm hover:bg-blue-600 transition-colors shadow shadow-blue-200 hover:cursor-pointer"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>

            {/* Social Sign Up Section */}
            <div className="mt-6">
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center w-full gap-4">
                  <div className="flex-1 border-t border-gray-200"></div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                    or sign up using
                  </span>
                  <div className="flex-1 border-t border-gray-200"></div>
                </div>

                <div className="flex gap-6 mt-2">
                  <button
                    type="button"
                    onClick={handleGoogle}
                    className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-all cursor-pointer"
                  >
                    <img
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      className="w-5 h-5"
                      alt="Google"
                    />
                  </button>
                  <button
                    type="button"
                    className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-all cursor-pointer"
                  >
                    <img
                      src="https://www.svgrepo.com/show/475633/apple-color.svg"
                      className="w-5 h-5"
                      alt="Apple"
                    />
                  </button>
                </div>
              </div>
            </div>

            <Link
              to="/login"
              className="block mt-6 text-primary-navy font-semibold text-xs text-center hover:underline transition-all"
            >
              Already have an account? Login
            </Link>
          </form>
        </div>
      </section>
    </main>
  );
}

function getSignupError(code) {
  const messages = {
    "auth/email-already-in-use": "An account with this email already exists.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/weak-password": "Password is too weak.",
  };
  return messages[code] || "Failed to create account. Please try again.";
}
