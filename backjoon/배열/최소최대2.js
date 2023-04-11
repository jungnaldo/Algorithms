// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.
// 예제입력
// 5
// 20 10 35 30 7
// 예제출력
// 7 35
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
///input[0] = 5
// input[1] = 20 10 35 30 7
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// 모든 정수는  -1,000,000보다 크거나 같고 , 1,000,000보다 작거나 같은 정수이다
let min = arr.reduce((a, b) => Math.min(a, b));
let max = arr.reduce((a, b) => Math.max(a, b));

console.log(min + "" + max);

////////////////////////////////////
