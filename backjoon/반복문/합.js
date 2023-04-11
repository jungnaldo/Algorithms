//1부터 n까지 합

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let summary = 0;

for (let i = 1; i <= n; i++) {
  summary += i;
}
console.log(summary);

// 2번쨰방식
//등차수열의 합
// 등차수열의 제1할부터 N항까지의 합을 Sn이라고 하자
// 첫째항이 a , 마지막항이 l 일때 Sn = N(a+l)/2

///fs모듈을 이용하여 파일 전체를 읽어와 문자열로 저장
let fs = require("fs");
//문자열을 수로 변환할때 parseInt에 비하여 Number의 속도가 더 빠름
let input2 = fs.readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input2[0]);
console.log((N * (N + 1)) / 2);
