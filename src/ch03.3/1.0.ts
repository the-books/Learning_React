type Lisa = {
  name: string;
  height: number;
  weight: number;
};

const lisa: Lisa = {
  name: '리사',
  height: 166.5,
  weight: 44.7,
};

function growLisa(lisa: Lisa, height: number): Lisa {
  lisa.height = height;
  return lisa;
}

console.log(growLisa(lisa, 167.5).height);
console.log(lisa.height);

export {};
