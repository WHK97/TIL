# 2강 자바스크립트
## 호출 스택, 이벤트 루프
### 1. 호출 스택
![Alt text](../../img/2-1-1.jpg)

코드의 작동 순서 third -> second -> first

![Alt text](../../img/2-1-2.jpg)

함수의 호출, 자료구조의 스택
- Anonymous은 가상의 전역 컨텍스트(항상 있다고 생각하는게 좋음)
- 함수 호출 순서대로 쌓이고, 역순으로 실행됨
- 함수 실행이 완료되면 스택에서 빠짐
- LIFO 구조라서 스택이라고 불림
### 2. 이벤트 루프
![Alt text](../../img/2-2-1.jpg)

이벤트루프 구조
- 이벤트 루프: 이벤트 발생시 호출할 콜백 함수들을 관리하고 호출할 순서를 결정하는 역활
- 태스크 큐: 이벤트 발생 후 호출되어야 할 콜백 함수들이 순서대로 기달리는 공간
- 백그라운드: 타이머나I/O작업 콜백, 이벤트 리스너들이 대기하는 공간, 여러 작업이 동시에 실행될 수 있음

![Alt text](../../img/2-2-2.jpg)

예제 코드에서 setTimeout이 호출될 때 콜백 함수 run은 백그라운드로
- 백그라운드에서 3초를 보냄
- 3초가 다 지난 후 백그라운드에서 태스크 큐로 보내짐

setTimeout과 anonymous가 실행 완료된 후 호출 스택이 완전히 비워지면,
이벤트 루프가 태스크 큐의 콜백을 호출 스택으로 올림
- 호출 스택이 비워져야만 올림
- 호출 스택에 함수가 많이 차 있으면 그것들을 처리하느라 3초가 지난 후에도 run 함수가 태스크 큐에서 대기하게 됨 -> 타이머가 정확하지 않을 수 있는 이유

![Alt text](../../img/2-2-3.jpg)

run이 호출 스택에서 실행되고, 완료 후 호출 스택에서 나감
- 이벤트 루프는 태스크 큐에 다음 함수가 들어올 때까지 계속 대기
- 태스크 큐는 실제로 여러 개고, 태스크 큐들과 함수들 간의 순서를 이벤트 루프가 결정함
## ES6(2015)+ 문법
### 1. const, let
ES6이전에는 var로 변수를 선언 했다.
|var|let|const|
|:---:|:---:|:---:|
|재선언O|재선언X|재선언X|
|재할당O|재할당O|재할당X|
|범위 fuction |범위 {} |범위 {} |

const는 상수
- 상수는 재할당이 안된다. 
```
const a = 0;
a = 1; // 에러.
let b = 0;
b = 1// 가능하다.
```
- 상수 선언 시 부터 초기화가 필요하다.

### 2. 템플릿 문자열
ES6에서는 ``(백틱)사용이 가능
- 백틱 문자열 안에 ${변수명}사용이 가능
- 백틱 중간에 엔터키 사용이 가능하다.
```
let a = 20;
let man = `나이는${a}입니다.`;
console.log(man); //나이는 20입니다 출력 
```

### 3. 객체 리터럴
객체의 매서드에 function을 사용않아도 된다.
{bye : bye}와 같이 key와value값이 같은경우 {bye}로 축약이 가능
[변수 + 값] 등으로 동적 속성명을 객체 속성 명으로 사용 가능
```
let bye = function(){
  console.log('bye');
}
let es = "ES";
const oldObj = {
  say: function(){
    console.log("Hello");
  },
  bye : bye
}
oldObj[es + 6] = "ES6";
oldObj.bye(); //bye
oldObj.say(); // Hello
console.log(oldObj.ES6) // ES6
```
```
const newObj = {
  say(){
    console.log("Hello");
  },
  bye,
  [es + 6]: "ES6"
}
newObj.bye(); //bye
newObj.say(); // Hello
console.log(newObj.ES6) // ES6
```

### 4. 화살표 함수
화살표함수로 function(){}을 줄여 사용이 가능하다
```
function add(x,y){
  return x + y;
}
let add2 = (x,y) =>{
  return x + y
}
//let add2 = (x,y) => x + y; // 코드가 한줄일경우 {}생략가능
//let add2 = (x,y) => (x + y);
//let add2 = x => x ; // 매개변수 한개일경우 ()생략가능
//let obj = (x,y) => ({x + y}); //객체를 리턴할경우 ()필수

```
화살표 함수가 function(){}를 대체하지는 못함
- this를 사용할 경우 화살표함수와 function(){}의 값이 다르다
- this를 사용할경우 function(){}을 이용해서 사용하는게 좋다.
<li><a href="./this.md">this</a></li>

### 5. 구조분해 할당
```
//기존 문법
const ex = {a:1,b:{c:2,d:3}};
const a = ex.a;
const c = ex.b.c;
console.log(c);
//구조분해 문법
const ex = {a:1,b:{c:2,d:3}};
const{a, b:{c,d}}= ex;
console.log(c);
```
```
//기존 문법
arr = [1,2,3,4];
const a = arr[0];
const b = arr[1];
const d = arr[3];
// 배열의 구조분해
const [a,b,,d] = arr; // 자리가 같아야한다. ,만 있으면 그 자리를 건너 뛴다.
```
this를 사용할 경우 구조분해를 했을때 오류가 발생한다.
this는 함수를 호출할 떄 어떻게 호출되었냐에 따라 결정되기 떄문이다.
### 6. 클래스
프로토타입 문법을 깔끔하게 작성할 수 있는 Class 문법
- Constructor(생성자), Extends(상속) 등을 깔끔하게 처리할 수 있음
- 코드가 그룹화되어 가독성이 향상됨.
### 7. 프로미스
### 8. async/await
### 9. for await of
### 10. Map/Set
### 11. 널 병합, 옵셔널 체이닝

## 프런트엔드 자바스크립트
### 1. AJAX
### 2. FormData
### 3. encodeURIComponent, decodeURIComponent
### 4. data attribute와 dataset