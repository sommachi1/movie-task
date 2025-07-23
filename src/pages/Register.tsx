import { useNavigate, Link } from "react-router-dom";
import logo from "../images/vector2.png"; // Add your logo image to assets folder

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle registration logic
    navigate("/dashboard"); // Redirect to home after registration
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <img src={logo} alt="App Logo" className="auth-logo" />
        <h2>Hi, Welcome</h2>
        <p className="auth-subtext">Create your account to get started</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="text"
            placeholder="Fullname"
            required
            className="auth-input"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="auth-input"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="auth-input"
          />

          <button type="submit" className="auth-button">
            Register
          </button>
        </form>

        <p className="auth-switch">
          Already have an account?{" "}
          <Link to="/login" className="auth-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
