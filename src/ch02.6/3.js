const { isConstructorDeclaration } = require("typescript");

class Idol {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }

  print() {
    console.log(`${this.name}은(는) 키가 ${this.height}cm 입니다.`);
  }
}


class BlackPink extends Idol {
  constructor(name, height, positions) {
    super(name, height);
    this.positions = positions;
  }

  print() {
    super.print();
    console.log(`${this.name}은(는) '${this.positions.join("'의 포지션과 '")}'의 포지션을 맡고 있습니다.`);
  }
}

const rose = new BlackPink('로제', 168, ['메인보컬', '리드댄서']);
rose.print();
