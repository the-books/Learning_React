type Black = {
  [name: string]: string;
};

const blacks: Black = {
  'JISOO': '1995년 1월 3일',
  'JENNIE': '1996년 1월 16일',
  'ROSE': '1997년 2월 11일',
  'LISA': '1997년 3월 27일',
};

const blackArray = Object.keys(blacks).map(key => ({ name: key, birth: blacks[key] }));

console.log(blackArray);

export {};
