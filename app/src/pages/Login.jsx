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
    <main className="flex min-h-screen">
      <section className="hidden lg:flex lg:flex-1 items-center justify-center bg-primary-blue">
        <div className="flex flex-col gap-8">
          <div className="flex gap-2 mb-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#0052FF"
              role="img"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white"
            >
              <title id="logo-title">figur logo</title>
              <path d="M13.789.422a4.001 4.001 0 0 0-3.578 0l-8 4A4.0011 4.0011 0 0 0 0 8v8c0 1.515.856 2.9 2.211 3.578l8 4a4.001 4.001 0 0 0 3.578 0l8-4A4.0011 4.0011 0 0 0 24 16V8c0-1.515-.856-2.9-2.211-3.578l-8-4ZM8 8c0-2.209 1.791-4 4-4s4 1.791 4 4v8c0 2.209-1.791 4-4 4s-4-1.791-4-4V8Zm6 0c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2Z" />
            </svg>
            <span class="text-xl font-bold text-white">figur</span>
          </div>
          <h1 className="text-white font-bold text-3xl">
            More than a digital payment
          </h1>
          <p className="text-white">
            Experience seamless accessibilty to pay bills, open personal &
            business bank accounts, track revenue & more on one platform.
          </p>
        </div>
      </section>
      <section className="flex-1 lg:flex-2 bg-white items-start mt-10 lg:items-center justify-center">
        <form action={handleLogin}>
          <h2>Login</h2>

          <input name="email" placeholder="Email" required />
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
}

export default Login;
