import {
  ButtonsWidget,
  CountdownWidget,
  HeaderWidget,
  TextWidget,
  Widget,
} from "../../components/Widget";
import Countdown from "../../components/Countdown";
import Button from "../../components/Button";
import { useEffect, useLayoutEffect, useState } from "react";

const audios = ["waka_waka_cut.mp3", "Agua-Mineral_ficar-legal.mp3", "Agua-Mineral_bebeu-agua.mp3"];

export function Home() {
  const [timer, setTimer] = useState(0);
  const [initialTimer, setInitialTimer] = useState(0);
  const [activeTimer, setActiveTimer] = useState(true);

  const statusInReset = !!timer && timer !== initialTimer;

  const decreaseTime = () => {
    if (timer > 0 && activeTimer) {
      if (timer === 1) {
        const indexRandom = Math.floor(Math.random() * audios.length);
        const audio = new Audio(audios[indexRandom]);
        audio.play();
      }
      setTimer(timer - 1);
    }
  };
  const resetTime = () => {
    setTimer(initialTimer);
    if (statusInReset) {
      setActiveTimer(false);
    } else {
      setActiveTimer(true);
    }
  };
  function setDefaultTimer(newTimer: number) {
    setTimer(newTimer);
    setInitialTimer(newTimer);
    localStorage.setItem('default_timer', newTimer.toString());
  }
  
  useLayoutEffect(() => {
    const default_timer = parseInt(localStorage.getItem('default_timer') || '');
    if (default_timer) {
      setDefaultTimer(default_timer);
    } else {
      localStorage.setItem('default_timer', (10*60).toString());
      setDefaultTimer(10 * 60)
    }
  },[])
    useEffect(() => {
    const id = setInterval(() => {
      decreaseTime();
    }, 1000);
    return () => clearInterval(id);
  });
  return (
    <Widget>
      <CountdownWidget>
        <HeaderWidget>WAQUA</HeaderWidget>
        <Countdown
          timer={timer}
          activeTimer={activeTimer}
          setNewTimer={setDefaultTimer}
        />
        <ButtonsWidget>
          <Button
            disabled={!timer}
            onClick={() => setActiveTimer((currentValue) => !currentValue)}
          >
            {!activeTimer ? "Retomar" : "Parar"}
          </Button>
          <Button onClick={resetTime} styleDisabled={statusInReset}>
            {statusInReset ? "Resetar" : "Iniciar"}
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
        <p>Não esqueça de manter o audio de seu desktop ligado.</p>
      </TextWidget>
    </Widget>
  );
}
