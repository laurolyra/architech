import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  ${({ theme }) => css`
    min-width: 28vw;
    background-color: ${theme.colors.blueLight};
    margin: 1rem 0;
  `}
`;
