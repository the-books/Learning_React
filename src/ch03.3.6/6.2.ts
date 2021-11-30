
const appendAMPM = (d: string) => {
  return d + ' AM';
};

const civilianHours = (d: Date) => {
  return d.toLocaleString();
};


type Compose = (...fns: Function[]) => (arg: any) => any;
const compose: Compose = (...fns) => (arg) => fns.reduce((composed, f) => f(composed), arg);


const both = compose(
  civilianHours,
  appendAMPM,
);

both(new Date());

export {};
