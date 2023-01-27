// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Dashboard.css';

// function Dashboard() {
//   return (
//     <div>
//       <h1>Welcome to the Dashboard</h1>
//       <Link to="/login">
//         <button>Login</button>
//       </Link>
//     </div>
//   );
// }

// export default Dashboard;

import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard</h1>
      <Link to="/login">
      <button>Login</button>
      </Link>
      <Link to="/register">
      <button>Register</button>
      </Link>
    </div>
  );
}

export default Dashboard;