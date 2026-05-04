import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onLogin = (event) => {
    event.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

    if (currState === "Sign Up") {
      const userExists = storedUsers.find((u) => u.email === data.email);
      if (userExists) {
        alert("Email already registered. Please login.");
        setCurrState("Login");
        return;
      }

      const newUser = { ...data };
      storedUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(storedUsers));
      localStorage.setItem("userName", data.name);
    } else {
      const user = storedUsers.find(
        (u) => u.email === data.email && u.password === data.password
      );

      if (user) {
        localStorage.setItem("userName", user.name);
      } else {
        alert("Invalid email or password!");
        return;
      }
    }

    setShowLogin(false);
    window.location.reload(); 
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">
          {currState === "Login" ? "Login" : "Create account"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;