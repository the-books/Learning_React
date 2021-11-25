type Jennie = {
  name: string;
  pet0: string;
  pet1: string;
}

const jennie: Jennie = {
  name: '제니',
  pet0: '카이',
  pet1: '쿠마',
};

type RenamePet = (j: Jennie) => Jennie;
const renamePet: RenamePet = (jennie) => ({
  ...jennie,
  pet0: '카이저',
  pet1: '쿠마몬',
});

console.log(renamePet(jennie));
console.log(jennie);

export {};
