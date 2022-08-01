import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --Almost-White: hsl(0, 0%, 98%);
    --Medium-Gray: hsl(0, 0%, 41%);
    --Almost-Black: hsl(0, 0%, 8%);
    --White: hsl(0, 0%, 100%);
    --Black: hsl(0, 0%, 0%);

    --font: "Epilogue", sans-serif;
  }

  * {
    box-sizing: border-box;
    font-family: var(--font);
  }

  body {
    background-color: var(--Almost-White);
    margin: 0;
  }
`;

export default GlobalStyle;
