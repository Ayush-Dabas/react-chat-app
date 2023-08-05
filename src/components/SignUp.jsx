import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signUp">
      <div className="formContainer">
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="name" />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="password" />

          <label htmlFor="userProfilePhoto">Profile Photo</label>
          <input type="file" id="userProfilePhoto" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
