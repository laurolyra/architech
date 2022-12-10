import styled, { css } from 'styled-components';

export const LogoBorder = styled.div`
  ${({ theme }) => css`
    /* width: fit-content; */
    padding: ${theme.spacing.xl};
    background-color: ${theme.colors.blueLight};
    border-radius: 2rem 0 2rem 0;
    box-shadow: ${theme.boxShadow.small};
    margin: 1rem;
  `}
`;

export const HomeContainer = styled.div`
  max-width: 30rem;
  margin: auto;
`;

export const WelcomeScreen = styled.div`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.blueLight};
  `}
`;

export const LoginForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    select,
    input {
      width: 80%;
      margin: ${theme.spacing.xs} auto;
      pading: ${theme.spacing.xs};
    }
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
