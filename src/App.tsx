import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </TransactionsProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
