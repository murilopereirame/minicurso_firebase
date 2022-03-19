import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    background-color: #001113;
    color: #127369;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }

  #root {
    height: 100%;
  }

  html {
    height: 100%;
  }
`;
