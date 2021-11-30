type Black = {
  name: string;
}
const blacks: Black[] = [
  { name: 'JISOO' },
  { name: 'JENNIE' },
  { name: 'ROSE' },
  { name: 'LISA' },
];

type EditName = (idx: number, newName: string, list: Black[]) => Black[];

const editName: EditName = (idx, newName, list) =>
  list.map((item, i) => i === idx ? { ...item, name: newName } : { ...item });

const newBlacks = editName(2, 'ROSÉ', blacks);
newBlacks[3].name = '리사';

console.log(newBlacks);
console.log(blacks);

export {};
