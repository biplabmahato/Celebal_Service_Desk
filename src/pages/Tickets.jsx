import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Tickets() {
  const [tickets, setTickets] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    axios.get(`http://localhost:5000/api/tickets/user/${user.id}`)
      .then(res => setTickets(res.data));
  }, []);

  return (
    <div>
      <h3>Your Tickets</h3>
      {tickets.map(ticket => (
        <div key={ticket._id}>
          <p>{ticket.description} - {ticket.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Tickets;
