import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      await resetPassword(email);
      setMessage("Check your email for reset instructions.");
    } catch (err) {
      setError(
        err.code === "auth/user-not-found"
          ? "No account found with this email."
          : "Failed to send reset email.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      {/* Left Section - 40% */}
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
            <p className="text-primary-navy text-xs">Forgot Password</p>
            <h2 className="text-base font-medium text-primary-navy">
              Let's help you retrieve your password
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {/* Success Message */}
            {message && (
              <div className="self-end">
                <span className="text-xs font-medium text-green-500 pointer-events-none text-right">
                  {message}
                </span>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="self-end">
                <span className="text-xs font-medium text-red-500 pointer-events-none text-right">
                  {error}
                </span>
              </div>
            )}

            {/* Email Field */}
            <div
              className={
                "relative border rounded-lg transition-all border-gray-200 focus-within:border-blue-600"
              }
            >
              <input
                type="email"
                name="email"
                value={email}
                placeholder=" "
                onChange={(e) => setEmail(e.target.value)}
                className="block px-4 pt-5 pb-1 w-full text-sm text-gray-900 bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 peer"
                required
              />
              <label className="absolute text-xs text-gray-400 duration-300 transform left-4 z-10 origin-left top-1/2 -translate-y-1/2 scale-100 peer-focus:top-2 peer-focus:-translate-y-1.5 peer-focus:text-blue-600 peer-focus:scale-90 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:scale-90">
                Email address
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-8 bg-[#2260FF] text-white py-3 rounded-full text-sm hover:bg-blue-600 transition-colors shadow shadow-blue-200 hover:cursor-pointer"
            >
              {loading ? "Sending…" : "Send Reset Email"}
            </button>

            {/* Sign Up Link */}
            <Link
              to="/signup"
              className="text-primary-navy text-left text-xs hover:underline transition-all"
            >
              I don’t have an account
            </Link>

            {/* Login Link */}
            <Link
              to="/login"
              className="block text-primary-navy text-xs text-left hover:underline transition-all"
            >
              Back to login
            </Link>
          </form>
        </div>
      </section>
    </main>
  );
}

export default ForgotPassword;
