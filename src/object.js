const dog = {
  name: "멍멍이",
  age: 2
};

console.log(dog.name);
console.log(dog.age);

const sample = {
  "key with space": true
};

console.log(sample);

const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨"
};

const captainAmerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카"
};
console.log(ironMan);
console.log(captainAmerica);

function print(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);
// 객체 구조분해
function new_print(hero) {
  const { alias, name, actor } = hero;
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}
new_print(ironMan);
new_print(captainAmerica);
// 객체 비구조화 할당
function new2_print({ alias, name, actor }) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}
new2_print(ironMan);
new2_print(captainAmerica);

const cat = {
  name: "냐옹이",
  sound: "냐오오오옹",
  say: function () {
    console.log(this.sound);
  }
};

cat.say();

//getter setter
const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log("calculate");
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    console.log("a가 바뀝니다.");
    this._a = value;
    this.calculate();
  },
  set b(value) {
    console.log("b가 바뀝니다.");
    this._b = value;
    this.calculate();
  }
};

console.log(numbers.sum);
numbers.a = 5;
console.log(numbers.sum);
numbers.b = 7;
console.log(numbers.sum);
numbers.a = 9;
console.log(numbers.sum);
