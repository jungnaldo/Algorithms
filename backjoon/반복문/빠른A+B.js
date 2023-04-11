let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = Number(input[0]);

let answer = "";

for (let t = 1; t <= te5stCase; t++) {
  let data = input[t].split(" ");
  let a = Number(data[0]);
  let b = Number(data[1]);
  ///정수에 문자열을 더하면 문자로 변환된다
  answer += a + b + "\n";
}
console.log(answer);
