const name = "JENNIE";
const height = 163;
const print: fn = function() {
  console.log(`${this.name}의 키는 ${this.height}cm 입니다.`)
};

const jennie = { name, height, print };

type JENNIE = typeof jennie;
type fn = (this: JENNIE) => void;

jennie.print();

export {};
