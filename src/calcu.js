let value = 1; // 변수 선언
value = 2; // 대입 연산자

let a = 1 + 2;
console.log(a);

a = 1 + 2 - (3 * 4) / 4;
console.log(a);

a++;
++a;
console.log(a);

console.log(++a);
console.log(a++);
console.log(a);

a--;
console.log(a);

console.log(a--);
console.log(a);
console.log(--a);
console.log(a);

a = 1;
a += 3; // a = a + 3
a -= 3; // a= a - 3
a *= 3; // a= a * 3
a /= 3;
console.log(a);

// 논리연산자
const b = !true;
console.log(b);

const c = !false;
console.log(c);

console.log("and 연산자 결과 출력");
const d = true && true;
console.log(d);
let f = false && false;
console.log(f);
f = false && true;
console.log(f);
f = true && false;
console.log(f);
console.log("or 연산자 결과 출력");
let t = true || false;
console.log(t);
t = false || true;
console.log(t);
t = true || true;
console.log(t);
t = false || false;
console.log(t);

// 괄호->not -> and -> or

console.log("비교 연산자출력");
const num1 = 1;
const num2 = 1;
const equals = num1 == num2;
console.log(equals);

const num3 = 1;
const num4 = "1";
const equals2 = num3 === num4;
console.log(equals2);

//js 에서는 null 과 undefuned 를 동일시 합니다.
const va1 = null;
const va2 = undefined;
const equals3 = va1 === va2;
console.log(equals3);

// != -> 타입 확인을 안하는거고
// !== -> 타입을 확인해주는거

// >
// <
// >=
// <=

let str1 = "심선보";
let str2 = "조용화";

console.log(str1 + str2);
