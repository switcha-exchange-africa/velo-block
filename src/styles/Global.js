import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background: #ffffff;
    margin: 0;
    padding: 0;
    font-family: 'Cabinet Grotesk', sans-serif;
    /* transition: all 0.25s linear; */
  }
`;