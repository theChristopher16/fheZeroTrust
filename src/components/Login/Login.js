import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div>
      <h1>Please Login</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" required/>
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" required/>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
