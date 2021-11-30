type Compose = (...fns: Function[]) => (arg: any) => any;
const compose: Compose = (...fns) => (arg) => fns.reduce((composed, f) => f(composed), arg);

type ClockTime = {
  hours: number;
  minutes: number;
  seconds: number;
  ampm: "PM" | "AM";
};

type Key = "hours" | "minutes" | "seconds";

const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = (message: string) => console.log(message);

const abstractClockTime = (date: Date): ClockTime => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
  ampm: date.getHours() >= 12 ? "PM" : "AM",
});

const civilianHours = (clockTime: ClockTime): ClockTime => ({
  ...clockTime,
  hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours,
});

const appendAMPM = (clockTime: ClockTime): ClockTime => ({
  ...clockTime,
  ampm: clockTime.hours >= 12 ? "PM" : "AM",
});

const display = (target: Function) => (time: ClockTime) => target(time);

const formatClock = (format: string) => (time: ClockTime) =>
  format.replace("hh", time.hours.toString())
    .replace("mm", time.minutes.toString())
    .replace("ss", time.seconds.toString())
    .replace("tt", time.ampm);

const prependZero = (key: Key) => (clockTime: ClockTime) => ({
  ...clockTime,
  [key]: clockTime[key] < 10 ? `0${clockTime[key]}` : clockTime[key],
});


const convertToCivilianTime = (clockTime: ClockTime) =>
  compose(
    appendAMPM,
    civilianHours,
  )(clockTime);

const doubleDigits = (civilianTime: ClockTime) =>
  compose(
    prependZero("hours"),
    prependZero("minutes"),
    prependZero("seconds"),
  )(civilianTime);

const startTicking = () =>
  setInterval(
    compose(
      clear,
      getCurrentTime,
      abstractClockTime,
      convertToCivilianTime,
      doubleDigits,
      formatClock("hh:mm:ss tt"),
      display(log),
    ),
    oneSecond(),
  );

startTicking();
