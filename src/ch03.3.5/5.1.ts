type Countdown = (value: number, fn: (v: number) => void, delay?: number) => number;

const countdown: Countdown = (value, fn, delay = 1000) => {
  fn(value);
  return (value > 0)
    ? setTimeout(() => countdown(value - 1, fn, delay), delay)
    : value;
};

countdown(10, (value) => console.log(value), 3000);

export {};
