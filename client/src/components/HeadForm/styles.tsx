import styled, { css } from 'styled-components';

export const FormContainer = styled.form`
  ${({ theme }) => css`
    min-width: 28vw;
    background-color: ${theme.colors.blueLight};
    border-radius: ${theme.border.logo};
    padding: ${theme.spacing.xl};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      text-align: center;
    }
    textarea {
      resize: none;
      min-height: 150px;
      padding: 0.4rem 0.2rem;
    }
    * {
      width: 100%;
      margin: 0.4rem 0;
    }
  `}
`;

export const ProposalInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FormButton = styled.button`
  ${({ theme }) => css`
    padding: 0.5rem 2rem;
    max-width: 8rem;
    text-align: center;
  `}
`;
