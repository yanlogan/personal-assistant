import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  ul {
    list-style-type: none;
  }

  body {
    background-color: #000000;
    font-size: ${({ theme }) => theme.fontSize.default};
  }

  img {
    width: 100%;
  }

  a {
    text-decoration: none;
  }
`
