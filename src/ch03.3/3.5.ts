type Black = {
  name: string;
}
const blacks: Black[] = [
  { name: 'JISOO' },
  { name: 'JENNIE' },
  { name: 'ROSE' },
  { name: 'LISA' },
];

type EditName = (oldName: string, newName: string, list: Black[]) => Black[];

const editName: EditName = (oldName, newName, l) => {
  return l.map(i => {
    if (i.name === oldName) {
      return {
        ...i,
        name: newName,
      };
    } else {
      return {
        ...i,
      };
    }
  })
}

const newBlacks = editName('ROSE', 'ROSÉ', blacks);
newBlacks[3].name = '리사';

console.log(newBlacks);
console.log(blacks);

export {};
