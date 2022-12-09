import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import HeadForm from '../../components/HeadForm';
import TicketList from '../../components/TicketList';
import { AuthContext } from '../../context/Authcontext';

const Dashboard = () => {
  const { currentUser, logout } = useContext(AuthContext);
  // const [error, setError] = useState(null);

  const { role } = currentUser;
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout(role);
      navigate('/');
    } catch (err: any) {
      console.warn(err?.response?.data);
    }
  };
  return (
    <>
      <p>role: {role}</p>
      <h1>Dashboard</h1>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
      <HeadForm />
      <TicketList />
    </>
  );
};

export default Dashboard;
