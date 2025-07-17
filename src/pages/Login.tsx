import { Link } from "react-router-dom";
import logo from "../../public/images/vector2.png";

export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <img src={logo} alt="App Logo" className="auth-logo" />
        <h2>Welcome Back</h2>
        <p className="auth-subtext">Login to continue your journey</p>

        <form className="auth-form">
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
            Login
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account?{" "}
          <Link to="/" className="auth-link">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
