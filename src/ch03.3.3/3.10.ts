const ages = [3, 17, 35, 36, 44, 61, 32, 11, 78, 83, 27, 22];

const maxAge = ages.reduce((max, value) => max > value ? max : value, 0);

console.log('maxAge', maxAge);

export {};
