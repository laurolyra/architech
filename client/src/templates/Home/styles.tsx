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
