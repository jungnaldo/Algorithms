//시작시간과 필요한 시간이 주어진다 두개를 더했을때 요리가 끝나는 시간을 구한다
//입력 a시b분
//걸리는 시간 c분
//1.입력으로 주어진 시각을 '분'의 형태로 바꾸기
//2.'분'이주어졌을때 시각을 알려주는 기능을 작성하기.

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b] = input[0].split(" ").map(Number);
let c = Number(input[1]);

let totalMinute = a * 60 + b + c; // 분의 형태로 바꾸기
totalMinute %= 1440; //totalMinute가 1440을 넘어갈수 있으므로 1440으로 나눈뒤 나머지를 취한다
let hour = parseInt(totalMinute / 60);
let minute = totalMinute % 60;

console.log(hour + " " + minute);
