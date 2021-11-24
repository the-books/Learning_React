class Idol {
  public name: string;
  public height: number;
  constructor(name: string, height: number) {
    this.name = name;
    this.height = height;
  }

  print() {
    console.log(`${this.name}은(는) 키가 ${this.height}cm 입니다.`);
  }
}

const jennie = new Idol('리사', 166.5);

export default jennie;
