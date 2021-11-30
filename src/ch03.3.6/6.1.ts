type Both = (d: Date) => string;

const both: Both = date => appendAMPM(civilanHours(date));

const appendAMPM = (d: string) => {
  return d + ' AM';
};

const civilanHours = (d: Date) => {
  return d.toLocaleString();
};

const result = both(new Date());

console.log(result);

export {};
