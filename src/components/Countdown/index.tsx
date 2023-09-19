import { BaseSyntheticEvent, Fragment, useId } from "react";
import { BoxCountdown, ContainerCountdown } from "./styles";

interface ICountdown {
  timer: number;
  activeTimer: boolean;
  setNewTimer?: (timer: number) => void;
}

const Countdown = ({ timer, activeTimer, setNewTimer }: ICountdown) => {
  const idForBaseKey = useId();
  const minutes = Math.floor(timer / 60);
  const seconds = Math.floor(timer % 60);
  const elemetsBoxCountdown = [
    { id: "minute1ºDecimalPlace", value: Math.floor(minutes / 10) },
    { id: "minute2ºDecimalPlace", value: Math.floor(minutes % 10) },
    { id: "second1ºDecimalPlace", value: Math.floor(seconds / 10) },
    { id: "second2ºDecimalPlace", value: Math.floor(seconds % 10) },
  ];

  document.title = `WAQUA - ${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  function sortValuesByMostRecent(
    values: string[],
    originalValue: number
  ): number[] {
    if (values[0] == originalValue.toString()) {
      return [parseInt(values[0]), parseInt(values[1])];
    } else {
      return [parseInt(values[1]), parseInt(values[0])];
    }
  }
  function setNewInputFocus(idInput: string) {
    const nextInput = document.getElementById(idInput);
    if (nextInput) {
      nextInput.focus();
    }
  }
  function handleChange(event: BaseSyntheticEvent) {
    if (setNewTimer) {
      let oldValue, newValue;
      const idCase = event.target.id;
      const value: string[] = event.target.value.split(/(?=\d)/);

      if (value.length != 2 || value.includes("-")) {
        return;
      }
      switch (idCase) {
        case "minute1ºDecimalPlace":
          [oldValue, newValue] = sortValuesByMostRecent(
            value,
            Math.floor(minutes / 10)
          );
          if (newValue < 6) {
            setNewTimer(timer + (newValue - oldValue) * 10 * 60);
          } else if (newValue == 6) {
            setNewTimer(60 * 60);
          }
          setNewInputFocus("minute2ºDecimalPlace");
          break;

        case "minute2ºDecimalPlace":
          [oldValue, newValue] = sortValuesByMostRecent(
            value,
            Math.floor(minutes % 10)
          );
          setNewTimer(timer + (newValue - oldValue) * 60);
          setNewInputFocus("second1ºDecimalPlace");

          break;

        case "second1ºDecimalPlace":
          [oldValue, newValue] = sortValuesByMostRecent(
            value,
            Math.floor(seconds / 10)
          );
          if (newValue < 6) {
            setNewTimer(timer + (newValue - oldValue) * 10);
          }
          setNewInputFocus("second2ºDecimalPlace");
          break;

        case "second2ºDecimalPlace":
          [oldValue, newValue] = sortValuesByMostRecent(
            value,
            Math.floor(seconds % 10)
          );
          setNewTimer(timer + (newValue - oldValue));
          break;
      }
    }
  }

  return (
    <ContainerCountdown>
      {elemetsBoxCountdown.map(({ id, value }) => (
        <Fragment key={idForBaseKey + id}>
          <BoxCountdown>
            <input
              id={id}
              type="number"
              disabled={activeTimer}
              value={value}
              onChange={handleChange}
            />
          </BoxCountdown>
          {id === "minute2ºDecimalPlace" ? ":" : ""}
        </Fragment>
      ))}
      <br />
    </ContainerCountdown>
  );
};

export default Countdown;
