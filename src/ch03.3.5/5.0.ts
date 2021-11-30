type Countdown = (value: number, fn: (v: number) => void) => number;

const countdown: Countdown = (value, fn) => {
  fn(value);
  return value > 0 ? countdown(value - 1, fn) : value;
};

countdown(10, (value) => console.log(value))

export {};
