const names = ['JISOO', 'JENNIE', 'ROSE', 'LISA', 'ROSE', 'JENNIE'];

type MakeUnique = (unique: string[], name: string) => string[];
const makeUnique: MakeUnique = (unique, name) => {
  return unique.indexOf(name) !== -1 ? unique : [...unique, name]
};

const uniqueNames = names.reduce(makeUnique, []);

console.log(uniqueNames);

export {};
