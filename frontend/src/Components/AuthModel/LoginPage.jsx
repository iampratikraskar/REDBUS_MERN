import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailure } from "../../Redux/auth/actions";
import { useHistory } from "react-router-dom";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const BASE_URL = import.meta.env.VITE_BACKEND_URL;

      const res = await axios.post(`${BASE_URL}/api/login`, {
        email,
        password,
      });

      console.log("Login success:", res.data);

      // ✅ Save in Redux
      dispatch(loginSuccess(res.data.user));

      // ✅ Save in localStorage
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful 🎉");

      history.push("/");
    } catch (err) {
      console.error(err);
      dispatch(loginFailure());
      alert("Invalid Email or Password ❌");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;