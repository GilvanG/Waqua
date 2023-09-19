import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";
import { TimerBackground } from "./components/TimerBackground";
import { Component } from "react";
import { Home } from "./pages/Home/index.class";

type PropsAppType = {
  layout?: number
};
type StateAppType ={
  initial_timer: number
}

class App extends Component<PropsAppType, StateAppType> {
  constructor(props: PropsAppType){
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <TimerBackground>
          <Home />
        </TimerBackground>
      </ThemeProvider>
    );
  }
}

export default App;
