import React from 'react';

function Register() {
  return (
    <div>
      <h1>Please Register</h1>
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
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" required/>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
