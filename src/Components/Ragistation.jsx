import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    // Validate First Name
    if (!formData.firstName.trim()) {
      formIsValid = false;
      errors.firstName = "First Name is required";
    }

    // Validate Last Name
    if (!formData.lastName.trim()) {
      formIsValid = false;
      errors.lastName = "Last Name is required";
    }

    // Validate Phone
    if (!formData.phone.trim()) {
      formIsValid = false;
      errors.phone = "Phone is required";
    } else if (!/^\d{10}$/i.test(formData.phone)) {
      formIsValid = false;
      errors.phone = "Invalid phone number";
    }

    // Validate Email
    if (!formData.email.trim()) {
      formIsValid = false;
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/i.test(formData.email)) {
      formIsValid = false;
      errors.email = "Invalid email address";
    }

    // Validate Password
    if (!formData.password.trim()) {
      formIsValid = false;
      errors.password = "Password is required";
    }

    setFormErrors(errors);
    return formIsValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form data submitted:", formData);
      // Add your registration logic here (e.g., send data to server)
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  return (
    <div className="App">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {formErrors.firstName && (
            <span className="error">{formErrors.firstName}</span>
          )}
        </label>
        <br />

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {formErrors.lastName && (
            <span className="error">{formErrors.lastName}</span>
          )}
        </label>
        <br />

        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {formErrors.phone && (
            <span className="error">{formErrors.phone}</span>
          )}
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {formErrors.password && (
            <span className="error">{formErrors.password}</span>
          )}
        </label>
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
