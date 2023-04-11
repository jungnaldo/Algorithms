// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);

let result = "";

for (let i = 0; i < n; i++) {
  //층(행) 만큰 반복
  for (let j = 0; j <= i; j++) {
    //현재 행 만큼 별을 출력
    result += "*";
  }
  result += "\n";
}
console.log(result);
