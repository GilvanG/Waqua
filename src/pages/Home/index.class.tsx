import { Component } from "react";
import {
  ButtonsWidget,
  CountdownWidget,
  HeaderWidget,
  TextWidget,
  Widget,
} from "../../components/Widget";
import Countdown from "../../components/Countdown";
import Button from "../../components/Button";

interface HomePropsType {}

type HomeStateType = {
  timer: number;
  initialTimer: number;
  activeTimer: boolean;
  idInterval: number;
};

export class Home extends Component<HomePropsType, HomeStateType> {
  constructor(props: HomePropsType){
    super(props);
    this.state = {
      timer: 0,
      initialTimer: 0,
      activeTimer: true,
      idInterval: 0
    };
    this.resetTime = this.resetTime.bind(this);
    this.statusInReset = this.statusInReset.bind(this);
    // this.decreaseTime = this.decreaseTime.bind(this);
    this.setDefaultTimer = this.setDefaultTimer.bind(this);
    
  }
  
  componentDidMount(): void {
    const default_timer = parseInt(localStorage.getItem('default_timer') || '');
    if (default_timer) {
      this.setDefaultTimer(default_timer);
    } else {
      localStorage.setItem('default_timer', (10*60).toString());
      this.setDefaultTimer(10 * 60)
    }
    const id = setInterval(() => {
      this.decreaseTime();
    }, 1000);
    this.setState({idInterval: id})
  }
  componentWillUnmount(): void {
    clearInterval(this.state.idInterval)
  }

  statusInReset() {
    return !!this.state.timer && this.state.timer !== this.state.initialTimer;
  }

  decreaseTime() {
    if (this.state.timer > 0 && this.state.activeTimer) {
      if (this.state.timer === 1) {
        const audio = new Audio("waka_waka_cut.mp3");
        audio.play();
      }
      this.setState({ timer: this.state.timer - 1 });
    }
  }
  public resetTime() {
    this.setState({ timer: this.state.initialTimer});
    if (this.statusInReset()) {
      this.setState({ activeTimer: false });
    } else {
      this.setState({ ...this.state, activeTimer: true });
    }
  }
  setDefaultTimer(newTimer: number) {
    localStorage.setItem('default_timer', newTimer.toString());
    this.setState({ timer: newTimer, initialTimer: newTimer });
  }

  render() {
    return (
      <Widget>
        <CountdownWidget>
          <HeaderWidget>WAQUA</HeaderWidget>
          <Countdown
            timer={this.state.timer}
            activeTimer={this.state.activeTimer}
            setNewTimer={this.setDefaultTimer}
          />
          <ButtonsWidget>
            <Button
              disabled={!this.state.timer}
              onClick={() =>
                this.setState((state: HomeStateType, props) => {
                  console.log(props)
                  return { ...this.state, activeTimer: !state.activeTimer };
                })
              }
            >
              {!this.state.activeTimer ? "Retomar" : "Parar"}
            </Button>
            <Button onClick={this.resetTime} styleDisabled={this.statusInReset()}>
              {this.statusInReset() ? "Resetar" : "Iniciar"}
            </Button>
          </ButtonsWidget>
        </CountdownWidget>
        <TextWidget>
          <p>
            Tá com sede? <em>Bebe água!</em>
          </p>
          <p>
            WAQUA é uma platorma criada com o intuito de lembrar pessoas
            esquecidas (eu) a se manterem constatemente hidratadas.
          </p>
          <p>Não esqueça de manter o áudio de seu desktop ligado.</p>
        </TextWidget>
      </Widget>
    );
  }
}