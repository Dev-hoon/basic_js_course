for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}

const names = ["멍멍이", "야옹이", "짹짹이"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

let numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
  console.log(number);
}

for (let name of names) {
  console.log(name);
}

const doggy = {
  name: "멍멍이",
  sound: "멍멍",
  age: 2
};
console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.values(doggy));

for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`);
}
for (let i = 0; i < 10; i++) {
  if (i === 2) continue; // 다음 루프를 실행
  console.log(i);
  if (i === 5) break; // 반복문을 끝내기
}

function sumOf(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; // sum = sum+number;
  }
  return sum;
}
const result = sumOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);

// 과제2
// function biggerThanThree(numbers) {
//   /* 구현해보세요 */
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]

// const numbers = [10,2,3,1,11,7,3,5,2,0,-1];
// console.log(biggerThanThree(numbers)); // [10,11,7,5]
