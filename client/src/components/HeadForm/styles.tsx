import styled, { css } from 'styled-components';

export const FormContainer = styled.form`
  ${({ theme }) => css`
    background-color: ${theme.colors.blueLight};
    border-radius: ${theme.border.logo};
    padding: ${theme.spacing.xl};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    textarea {
      resize: none;
    }
  `}
`;

export const ProposalInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
