let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);

for (let i = 1; i <= 9; i++) {
  //템플릿 리터럴을 사용해 문자열 내부에 변수 포함시킨다
  console.log(`${n} * ${i} = ${n * i}`);
}
