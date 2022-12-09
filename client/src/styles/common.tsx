import styled, { css } from 'styled-components';

export const ErrorMessage = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.danger};
  `}
`;

export const FormButton = styled.button`
  ${({ theme }) => css`
    padding: 0.5rem 2rem;
    max-width: 8rem;
    text-align: center;
  `}
`;
