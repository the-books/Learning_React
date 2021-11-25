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

function renamePet(): Jennie {
  jennie.pet0 = '카이저';
  jennie.pet1 = '쿠마몬';
  return jennie;
}

renamePet();
console.log(jennie);

export {};
