type Black = {
  name: string;
};

const black: Black[] = [
  { name: 'JISOO' },
  { name: 'JENNIE' },
  { name: 'ROSE' },
];

const addBlack = function(name: string, members: Black[]): Black[] {
  members.push({ name });
  return members;
};

console.log(addBlack('LISA', black).length);
console.log(black.length);

export {};
