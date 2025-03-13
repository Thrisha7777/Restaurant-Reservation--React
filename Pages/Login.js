import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa"; // Import icons
import "./Login.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isBlinking, setIsBlinking] = useState(false);
  const navigate = useNavigate();

  const handleAuth = () => {
    navigate("/home");
  };

  return (
    <div className="auth-container">
      {/* Animated Emoji */}
      <div className="emoji">{isBlinking ? "😑" : "😊"}</div>

      {/* Form Title */}
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>

      {/* Form Inputs */}
      <div className="form-container">
        {!isLogin && (
          <div className="input-container">
            <i>
              <FaUser />
            </i>
            <input type="text" placeholder="Full Name" />
          </div>
        )}

        <div className="input-container">
          <i>
            <FaUser />
          </i>
          <input type="text" placeholder="Username" />
        </div>

        <div className="input-container">
          <i>
            <FaLock />
          </i>
          <input
            type="password"
            placeholder="Password"
            onFocus={() => setIsBlinking(true)}
            onBlur={() => setIsBlinking(false)}
          />
        </div>

        {/* Button */}
        <button className="auth-btn" onClick={handleAuth}>
          {isLogin ? "Login" : "Sign Up"}
        </button>

        {/* Toggle Login & Signup */}
        <p onClick={() => setIsLogin(!isLogin)} className="toggle-text">
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
