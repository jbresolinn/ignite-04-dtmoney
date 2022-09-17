import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: ${(props) => props.theme.colors['green-500']}; 
  }

  body {
    background-color: ${(props) => props.theme.colors['gray-800']};
    color: ${(props) => props.theme.colors['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem ${(props) => props.theme.fonts.default}
  }

  button, a {
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }
`
