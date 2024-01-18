import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Dropdown } from "@fluentui/react/lib/Dropdown";


const ValidatorApp = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const options = [
    { key: "option1", text: "Alredy Login " },
    { key: "option2", text: "Registation " },  ];

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!user.trim()) {
      newErrors.user = "Username is required";
      isValid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form is valid. Submitting...");
    } else {
      console.log("Form validation failed. Please check errors.");
    }
  };

  return (
    <div>
      <span>Login form</span>
      <form onSubmit={handleSubmit}>
        <div>
          <i class="bi bi-person-circle"></i> {""}
          <label htmlFor="user">Username:</label>
          <input
            type="text"
            id="user"
            value={user}
            onChange={handleUserChange}
          />
          {errors.user && <span>{errors.user}</span>}
        </div>
        <div>
          <i class="bi bi-envelope-at-fill"></i> {""}
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <i class="bi bi-eye-fill"></i> {""}
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <button type="submit">Submit</button>
          
          <div className="App">
            <Dropdown
              placeholder="Select a form "
              label="Select a data :"
              options={options}
            />
          </div>
          
        </div>
      </form>
    </div>
  );
};

export default ValidatorApp;
