type Black = {
  id: string;
  name: string;
  height: number;
};

const blacks: Black[] = [
  {
    id: 'jisoo',
    name: 'JISOO',
    height: 162,
  },
  {
    id: 'jennie',
    name: 'JENNIE',
    height: 163,
  },
  {
    id: 'rose',
    name: 'ROSE',
    height: 168,
  },
  {
    id: 'lisa',
    name: 'LISA',
    height: 166.5,
  },
];

type NewBlacks = {
  [id: string]: {
    name: string;
    height: number;
  }
}

type MakeHash = (hash: NewBlacks, black: Black) => NewBlacks;
const makeHash: MakeHash = (hash, { id, name, height }) => {
  hash[id] = { name, height };
  return hash;
};

const newBlacks = blacks.reduce(makeHash, {});

console.log(newBlacks);

export {};
