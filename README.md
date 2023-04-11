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
