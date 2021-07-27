// foreach 를 활용힌 배열  loop 돌리기
const superheroes = ["아이언맨", "캡틴 아메리카", "토르", "닥터 스트레인지"];
for (let i = 0; i < superheroes.length; i++) {
  console.log(superheroes[i]);
}
// 이러한 방식을도 구현 가능 함.
// 하지만 forEach 로도 구현이 가능

console.log("forEach로 똑같은거 구현하기");

superheroes.forEach((hero) => {
  console.log(hero);
});
// 위와 같이 화살표 함수 처럼 만들어서 사용이 가능함.
// hero 라는 변수안에 배열의 각각의 값을 받아서 움직이기에 각각의 값을 더욱
// 쉽게 가공 할수 있음

// map 함수 활용하기
console.log("map 함수 공부하기");

const array = [1, 2, 3, 4, 5, 6, 7, 8];
// 내가 원하는 출력물
// squared = [1,4,9,16,25,36,49,64];
console.log("방금 배운 forEach 활용하여 만들어보자");
const squared = [];
array.forEach((n) => {
  squared.push(n * n);
});
console.log(squared);
console.log("map 함수를 이용해 좀 고여 보자");
// map 함수를 이용해 좀 고야 보자
// 코드 줄이기
const square = (n) => n * n; // 화살표 함수를 만들고
const squared_map = array.map(square);
console.log(squared_map);

console.log("map 함수를 이용해 좀  많이 고여 보자");
const squared_map_v2 = array.map((n) => n * n);
console.log(squared_map_v2);

//findindex & find
const todos = [
  {
    id: 1,
    text: "블라블라",
    done: true
  },
  {
    id: 2,
    text: "집구하지",
    done: false
  },
  {
    id: 3,
    text: "졸업하기",
    done: false
  },
  {
    id: 2,
    text: "퇴사하기",
    done: false
  }
];
const index = todos.findIndex((todo) => todo.id === 3);
console.log(index);
const todo = todos.find((todo) => todo.id === 3);
console.log(todo);
//const tasksNotDone = todos.filter(todo => todo.done === false);
const tasksNotDone = todos.filter((todo) => !todo.done);
console.log(tasksNotDone);

const numbers = [10, 20, 30, 40];
const idx = numbers.indexOf(30);
numbers.splice(idx, 1); // 해당 인덱스 부터 1개 잘라내기
console.log(numbers);
// 기존 배열을 건들이지 않고 가공해야 할때 쓰이는 아이

const numbers2 = [10, 20, 30, 40];
const sliced = numbers.slice(0, 2); // 0부터 시작해서 2전까지
// 기존 배열이 그대로남아있음
console.log(sliced); // [10, 20]
console.log(numbers2); // [10, 20, 30, 40]

// 제일 앞에 원소를 꺼내어준다.
const value = numbers.shift();
console.log(value);
console.log(numbers);

// 제일 뒤에 원소를 꺼내어 준다.
const value2 = numbers.pop();
console.log(value2);
console.log(numbers);

numbers.unshift(5);
console.log(numbers);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);
console.log(concated);
//기존 배열을 건드리지 않아

const array2 = [1, 2, 3, 4, 5];
console.log(array2.join());
console.log(array2.join(" "));
console.log(array2.join(", "));

// reduce
const number_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
number_array.forEach((n) => {
  sum += n;
});
console.log(sum);
console.log("reduce 함수를 이용해 좀  많이 고여 보자");
let sum_reduce = number_array.reduce((accumulator, current) => {
  console.log({ accumulator, current });
  return accumulator + current;
}, 0);
console.log(sum_reduce);

let avg = number_array.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0);
console.log(avg);

function countBiggerThanTen(numbers) {
  /* 구현해보세요 */
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5

console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!"");
console.log(!NaN);

console.log(!3);
console.log(!"hello");
console.log(!["array?"]);
console.log(![]);
console.log(!{ value: 1 });
