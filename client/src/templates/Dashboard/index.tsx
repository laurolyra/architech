import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import HeadForm from '../../components/HeadForm';
import TicketList from '../../components/TicketList';
import { AuthContext } from '../../context/Authcontext';
import * as S from './styles';
import * as Common from '../../styles/common';

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
        <Common.FormButton type="button" onClick={handleLogout}>
          Logout
        </Common.FormButton>
      </S.HeaderDashboard>
      <S.DashboardContainer>
        <S.InfoandForm>
          <S.TextTutorial>
            <h1>Welcome to your dashboard!</h1>
            <h4>Here you can check your tickets and create new ones.</h4>
            <h4>
              Don&apos;t forget to fill all the fields when sending a proposal.
            </h4>
            <h4>The more descriptive, the better!</h4>
          </S.TextTutorial>
          <HeadForm />
        </S.InfoandForm>
        <TicketList />
      </S.DashboardContainer>
    </>
  );
};

export default Dashboard;
