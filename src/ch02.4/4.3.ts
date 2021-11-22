const a = ['A', 'B', 'C', 'D'];
const [first, ...rest] = a;

console.log(first);
console.log(rest.join(', '));

export {};
