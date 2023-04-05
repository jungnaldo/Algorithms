// 45분 일찍 알람 설정하기
// 0분보다 작아지면 시가 1시간 감소한다.
// 0시보다 작아지면 시가 23시로 초기화된다.
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let hour = Number(input[0].split(" ")[0]);
let minute = Number(input[0].split(" ")[1]);

if (minute < 45) {
  hour -= 1;
  minute += 15;
  if (hour < 0) {
    hour = 23;
  } else minute -= 45;
}

console.log(hour + " " + minute);
