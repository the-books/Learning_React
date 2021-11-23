function Idol(name, height) {
  this.name = name;
  this.height = height;
}

Idol.prototype.print = function() {
  console.log(`${this.name}은(는) 키가 ${this.height}cm 입니다.`);
}

const jennie = new Idol('제니', 163);
jennie.print();
