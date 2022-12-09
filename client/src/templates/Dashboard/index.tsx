import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import HeadForm from '../../components/HeadForm';
import TicketList from '../../components/TicketList';
import { AuthContext } from '../../context/Authcontext';
import * as S from './styles';

const Dashboard = () => {
  const { currentUser, logout } = useContext(AuthContext);
  // const [error, setError] = useState(null);

  const { first_name, role } = currentUser;
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
      <S.HeaderDashboard>
        <h1>Hi, {first_name}</h1>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </S.HeaderDashboard>
      <S.DashboardContainer>
        <S.InfoandForm>
          <h1>Dashboard</h1>
          <HeadForm />
        </S.InfoandForm>
        <TicketList />
      </S.DashboardContainer>
    </>
  );
};

export default Dashboard;
