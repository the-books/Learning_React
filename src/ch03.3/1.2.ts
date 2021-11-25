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

type GrowLisa = (l: Lisa, h: number) => Lisa;

const growLisa: GrowLisa = (lisa, height) => ({
  ...lisa,
  height,
});

console.log(growLisa(lisa, 168.5).height);
console.log(lisa.height);
