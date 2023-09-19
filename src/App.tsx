import { ThemeProvider } from 'styled-components';
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import { TimerBackground } from './components/TimerBackground';
import { Footer } from './components/Footer';



function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TimerBackground>
        <Home />
      </TimerBackground>
      <Footer />
    </ThemeProvider>
  )
}

export default App
