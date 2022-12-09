import {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme,
  css,
} from 'styled-components';

const styled = { createGlobalStyle };

type GlobalStylesProps = object;

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 80%;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
  }

  p {
    font-size: 10px;
  }

  h1 {
    font-size: 20px;
  }

  ${({ theme }) => css`
    html,
    body {
      height: 100%;
      background-color: ${theme.colors.blue};
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  `}
`;

export default GlobalStyles;
