import React, { useState } from "react";
import "./AuthModal.module.css";
import axios from "axios";


const AuthModal = ({ isOpen, setIsOpen, onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (isLogin) {
        // LOGIN
        const res = await axios.post("http://localhost:5000/api/login", {
          email: formData.email,
          password: formData.password,
        });

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        onLoginSuccess(res.data.user);
        alert("Login Successful ✅");
      } else {
        // REGISTER
        await axios.post("http://localhost:5000/api/register", formData);
        alert("Registered Successfully 🎉");
        setIsLogin(true);
      }

      setIsOpen(false);
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="modalOverlay">
      <div className="modalBox">
        <h2>{isLogin ? "Login" : "Register"}</h2>

        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>
          {isLogin ? "Login" : "Register"}
        </button>

        <p onClick={() => setIsLogin(!isLogin)} className="switchText">
          {isLogin
            ? "New user? Register here"
            : "Already have account? Login"}
        </p>

        <span className="closeBtn" onClick={() => setIsOpen(false)}>
          ✖
        </span>
      </div>
    </div>
  );
};

export default AuthModal;