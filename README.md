## 코딩테스트 문제풀이를 위한 JavaScript 문법

- 알고리즘 문제에서는 적절한 입출력 양식이 주어진다
  1.  첫번째 단계는 데이터를 입력받거나 생성하는 것이다 2.이후에 적절한 알고리즘을 사용하여 도출된 정답을 정확한 형식으로 출력한다
- 일반적인 알고리즘 문제를 풀때는 , 표준 출력으로 console.log()를 사용한다

```js
console.log("hello world");
result = 35;
///템플릿 리터럴을 사용하여 문자열 내부에 변수를 포함시킨다
console.log(`정답은 ${35} 입니다`);
```

- 자바스크립트의 기본 사칙연산

```js
a=7
b=3
console.log(a+b) 10
console.log(a-b) 4
console.log(a*b) 21
console.log(parseInt(a / b) //몫만 남기기 2
console.log( a % b) //나머지만 남기기 1
```

- 자바스크립트로 코딩테스트 문제를 풀 때 , 출력 과정만으로 시간초과를 받을 때가 있다.
- 출력 시간을 단축하기 위해 다음과 같은 방법을 유용하게 사용할수 있다.

```js
let answer = "";
//여러 출력 결과를 한줄에 하나씩 출력할 떄 매번 console.log()를 실행하지 않고 ,
//하나의 문자열에 결과를 저장해서 한꺼번에 출력하는 것이 대개 더 빠르게 수행된다.

for(let i = 1 ; i <=100; i++) {
  answer += i+'\n'; 문자열로 변환하여 기록
}
console.log(answer)
```

## 코딩 테스트용 자바스크립트 기본 입력 - fs모듈

- 입력 데이터가 텍스트 파일 형태로 주어지는 경우 파일 시스템 모듈을 사용한다.
- 예를 들어 /dev/stdin 파일에 적힌 텍스트를 읽어오는 경우 다음과 같이 코드를 작성한다.
- **기능 : 전테 텍스트를 읽어 온 뒤에 , 줄바꿈 기호를 기준으로 구분하여 리스트로 변환**

```js
//readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin')/to String().split('\n')

console.log(input)
```

## 코딩 테스트용 자바스크립트 기본 입력 - readline

- 한 줄씩 입력을 받아서 처리하여 정답을 출력할때는 readline모듈을 사용 할 수 있다.

```js
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  //콘솔 입력 창에서 줄바꿈(enter)을 입력할때마다 호출
  input.push(line);
}).on("close", function () {
  //콘솔 입력창에서 컨트롤 +c 혹은 컨트롤 + D를 입력하면 호출 (입력의 종료)
  console.log(input);
  process.exit();
});
```

## 자바스크립트 문법 - 조건문

- 조건에 따라서 프로그램의 흐름을 결정할때 사용

```js
if (condition1) statement1;
else if (condition2) statement2;
else if (condition3) statement3;
else statementN;
```

## 자바스크립트 문법 - 반복문

- 조건에 따라서 특정한 코드를 반복하고자 할 때 사용할수 있는 코드다 -초기문이 존재한다면 초기문이 먼저 실행된다 -조건문이 참이라면 블록 내부 코드가 실행되고 거짓이면 반복문이 종료된다 -블록 내부 코드가 실행괸 위에 증감문이 실행된다.

```js
for(초기문; 조건문; 증감문){
statements
}
//1부터 100까지의 합 계산
let summary = 0;
for(let i = 1 ; i <= 100; i++ {
  summary +=i;
}
    console.log(summary)
```

- 조건에 따라서 특정한 코드를 반복하고자 할 떄 사용할 수 있는 코드다.

```js
//while문은 조건문이 참일때 실행되는 반복문이다
//블록내부의 코드가 실행 되기 전에 참 혹은 거짓을 판단한다
//거짓을 경우 while문 탈출
while (조건문) {
  //실행되는 코드 부분
}
```

## 자바스크립트 문법 - Number와 String 형태변환

- 수(number)데이터와 문자열(string)데이터간의 상호 변환이 필요하다.

```js
let a = "777";
let b = Number(a);
console.log(b); //777

let a = 777;
let b = String(a);
console.log(b); //"777"
```

## 자바스크립트 문법 - Array.prototype.reduce()

- 배열의 모든 원소에 대하 특정한 연상을 순차적으로 적용할 때 reduce()를 사용한다.

```js
reduce()메서드는 배열의 각 요소에 대해 reducer 함수를 실행한 뒤에 하나의 결과를 반환 합니다. reducer의 형태 : accumulator ,  currentValu) => (반환값)
- 배열의 각 원소를 하나씩 확인하며 각 원소는 currentValue에 해당합니다.
- 반환값은 그 이후에 원소에 대하여  accumulator에 저장됩니다.

let data = [5,2,9,8,4]

//최소값 구하는 예제
let minvalue = data.reduce((a,b)=>Math.min(a,b)))
//원소의 합계 구하기 예제

let summary = data.reduce((a,b)=>a+b)
```

## 자바스크립트 문법 - 배열 초기화

- 알고리즘 문제를 풀 떄 자주 사용되는 배열 초기화 방식

```js
//직접 값을 설정하여 초기화

let arr = [1, 2, 3, 4];

//길이가 5이고 모든 원소의 값으 0 인 배열 초기화

let arr = new Array(5).fill(0);
```

## 자바스크립트 문법 - 집합

- 특정한 원소의 등장 여부를 파악할때 집합 자료형을 효과적으로 사용할수있다.

```js
let mySet = new Set(); //집합 객체 생성

//여러개의 원소 삽입.
mySet.add(3);
mySet.add(5);
mySet.add(7);
mySet.add(8);

console.log(`원소의개수는 ${mySet.size}`);
console.log(`원소 7을 포함하는가? ${mySet.has(7)}`);

//원소 5 제거
mySet.delete(5);

//원소를 하나씩 출력

for (let item of mySet) console.log(item);
```

## 자바스크립트 문법 - 소수점 아래 특정 자리에서 반올림

- 실수를 출력할때 소수점 아래 특정 자리에서 반올림 할수있다
- toFixed()

```js
let x = 123.456;
console.log(x.toFixed(2));
```
