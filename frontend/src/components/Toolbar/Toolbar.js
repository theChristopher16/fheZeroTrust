import React from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.css';


function Toolbar() {
  return (
    <div className="toolbar">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default Toolbar;
