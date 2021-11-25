const blacks = ["JISOO", "JENNIE", "ROSE", "LISA"];

type CutBlack = (c: string, l: string[]) => string[];
const cubBlack: CutBlack = (cut, list) => list.filter(b => b !== cut);
console.log(cubBlack('ROSE', blacks).join(', '));
console.log(blacks.join(', '));

export {};
