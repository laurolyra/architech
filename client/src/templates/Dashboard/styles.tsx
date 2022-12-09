import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 80%;
  margin: auto;
`;

export const HeaderDashboard = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoandForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5rem 0 1rem;
  flex-direction: row;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
