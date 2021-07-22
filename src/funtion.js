const a = 1;
const b = 2;
const sum = a + b;

function add(a, b) {
  return a + b;
  //console.log("해당 부분은 실행이 되지 않습니다.!");
}

const result = add(1, 2);
console.log(result);

function hello(name) {
  console.log("안녕 " + name + "아!!!!");
}

function new_hello(name) {
  console.log(`안녕 ${name}아!!!!`);
}

hello("태훈");
hello("용화");
hello("선보");

new_hello("태훈");

// grade('태훈',99);
// grade('선보',73);
// grade('용화',55);
