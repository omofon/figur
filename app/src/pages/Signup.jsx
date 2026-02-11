import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  function handleSignup(formData) {
    const user = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    signup(user);
    navigate("/dashboard");
  }

  return (
    <form action={handleSignup}>
      <h2>Sign up</h2>

      <input name="name" placeholder="Name" required />
      <input name="email" placeholder="Email" required />

      <button type="submit">Create account</button>
    </form>
  );
}

export default Signup;
