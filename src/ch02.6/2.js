class Idol {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }

  print() {
    console.log(`${this.name}은(는) 키가 ${this.height}cm 입니다.`);
  }
}

const jennie = new Idol('리사', 166.5);
jennie.print();
