import React, { useContext } from 'react';
import { AuthContext } from '../../context/Authcontext';

function Dashboard() {
  const { currentUser } = useContext(AuthContext);
  const { role } = currentUser;
  return (
    <>
      <p>role: {role}</p>
      <h1>Dashboard</h1>
    </>
  );
}

export default Dashboard;
