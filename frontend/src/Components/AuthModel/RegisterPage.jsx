import React, { useState } from "react";
import styles from "./AuthPage.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/api/register", formData);

      alert("Registered Successfully 🎉");
      history.push("/login");
    } catch (err) {
      alert("Registration failed ❌");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2>Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

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

        <button onClick={handleRegister}>Register</button>

        <p onClick={() => history.push("/login")}>
          Already have account? Login
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;