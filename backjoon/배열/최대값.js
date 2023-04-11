// 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.

// 예를 들어, 서로 다른 9개의 자연수

// 3, 29, 38, 12, 57, 74, 40, 85, 61

// 이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.

// 입력
// 3
// 29
// 38
// 12
// 57
// 74
// 40
// 85
// 61

// 출력
// 85
// 8
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
///[3,29,38,12,57,74,40,85,61] (string)
let maxIndex = 0;
let maxValue = 0;

for (let i = 0; i < 9; i++) {
  let data = Number(input[i]);
  if (maxValue < data) {
    maxIndex = i;
    maxValue = data;
  }
}
console.log(maxValue);
console.log(maxIndex);
