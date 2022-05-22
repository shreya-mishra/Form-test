import React, { useState } from "react";
import "./SignupForm.css";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitButton = e => {
    e.preventDefault();
    if (email === "" || phone === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {email} successfully registered!!</h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>

      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        <label className="label">Email</label>
        <input
         placeholder='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="input"
          type="email"
        />
        <label className="label">Phone</label>
        <input
        placeholder='phone'
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className="input"
          type="phone"
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          onClick={handleSubmitButton}
        />
      </form>
    </div>
  );
};

export default SignupForm;
