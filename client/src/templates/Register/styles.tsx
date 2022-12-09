import styled, { css } from 'styled-components';

export const LogoBorder = styled.div`
  ${({ theme }) => css`
    /* width: fit-content; */
    padding: ${theme.spacing.xl};
    background-color: ${theme.colors.blueLight};
    border-radius: 2rem 0 2rem 0;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    margin: 1rem;
  `}
`;

export const RegisterContainer = styled.div`
  max-width: 30rem;
  margin: auto;
`;

export const ErrorMessage = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.danger};
  `}
`;
