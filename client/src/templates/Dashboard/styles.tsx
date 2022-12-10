import styled, { css } from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 80%;
  margin: auto;
`;

export const HeaderDashboard = styled.div`
  padding: 1rem 0.4rem;
  display: flex;
  justify-content: space-between;
`;

export const InfoandForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.2rem 0 1rem;
  flex-direction: row;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const TextTutorial = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    h1,
    h2,
    h3,
    h4 {
      color: ${theme.colors.blueLight};
    }
    max-width: 30vw;
    margin-right: 1rem;
    @media (max-width: 480px) {
      max-width: 100%;
      margin-right: initial;
      margin-bottom: 1rem;
    }
  `}
`;
