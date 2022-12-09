import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.blueLight};
    margin: 1rem 0;
    border-radius: ${theme.border.logo};
    box-shadow: ${theme.boxShadow.small};
    padding: ${theme.spacing.l};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 6rem;
  `}
`;

export const TitleStatusWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
