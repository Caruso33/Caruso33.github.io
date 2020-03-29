import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
 *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    font-family: "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  html {
    /* This defines what 1rem is, 1 rem = 10px */
    font-size: 62.5%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  #___gatsby, #gatsby-focus-wrapper {
      height: 100%;
  }
`

export default GlobalStyle

export const boxShadow = "0 0 20px 0 rgba(0, 0, 0, 0.3)"
