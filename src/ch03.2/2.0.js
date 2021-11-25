const string = " Restaurants in Hanalei";
const arrString = [...string];
const result = arrString.map(ch => ch === ' ' ? '+' : ch)

console.log(result.join(''));
