type Black = {
  name: string;
};

const black: Black[] = [
  { name: 'JISOO' },
  { name: 'JENNIE' },
  { name: 'ROSE' },
];

type AddBlack = (n: string, m: Black[]) => Black[];

const addBlack: AddBlack = (name, members) => members.concat({ name });

console.log(addBlack('LISA', black).length);
console.log(black.length);

export {};
