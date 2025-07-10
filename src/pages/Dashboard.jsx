import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <h2>Welcome {user.name}</h2>
      <Link to="/tickets">View Tickets</Link>
    </div>
  );
}

export default Dashboard;
