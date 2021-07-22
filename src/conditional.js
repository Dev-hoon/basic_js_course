const a = 1;
if (a + 1 === 2) {
  console.log("a + 1 이 2 입니다.");
}

const b = 10;
if (b > 15) {
  console.log("b 가 15 큽니다.");
} else {
  console.log("b 가 15보다 크지 않습니다.");
}

const c = 10;
if (c === 5) {
  console.log("5입니다!");
} else if (c === 10) {
  console.log("10입니다!");
} else {
  console.log("5도 아니고 10도 아닙니다.");
}

const device = "iphone";

switch (device) {
  case "iphone":
    console.log("아이폰!");
    break;
  case "ipad":
    console.log("아이패드!");
    break;
  case "galaxy note":
    console.log("갤럭시 노트!");
    break;
  default:
    console.log("모르겠네요..");
}
