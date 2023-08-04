import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Let's Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />

          <button>Sign In</button>
        </form>
        <p>Don't have an account ? Sign Up</p>
      </div>
    </div>
  );
};

export default Login;
