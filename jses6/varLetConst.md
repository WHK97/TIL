# 변수 문법
## var let const

1. var
재선언가능
```
var name = "kim";
var name = "lee";
```
재할당가능
```
var name = "kim";
name = "lee"
```
범위 function
```
function 함수(){
  var name = "kim";
  name; //가능
}
name; // 불가능
```
2. let
재선언 불가능
```
let name = "kim";
```
재할당가능
```
let name = "kim";
name = "lee"
```
범위 {}
```
if(true){
  let name = "kim";
}
```
3. const
재선언 불가능
```
const name = "kim";
```
재할당 불가능
```
const name = "kim"; // constant 상수 값이 변하지 않는다 
const obj = {name: "Kim"};
obj.name = "Lee"// 가능
obj = "Lee"// 불가능
//만약 오브젝트값을 변하는걸 막길원한다면 Object.freeze(obj)사용해야한다.
Object.freeze(obj);
```
범위 {}
```
if(true){
  const name = "kim";
}
```
## Hoisting, 전역변수, 참조
#### 변수의 Hoisting현상
변수를 만나면 선언부분을 강제로 맨위로 끌어올린다.
```
let age = 20;
```
코드를 작성을 하면 JS는 
```
let age;
age = 20;
```
이렇게 코드를 해석을 한다.
#### 전역변수
모든 곳에서 쓸 수 있는 변수
```
let age = 20; // 전역변수
window.num = 1; // 전역변수 권장방식
function 함수(){
  let name = "KIM" // 지역변수
  console.log(age);
}
함수();
```
#### 연습문제
```
if(true){
  let a = 1;
  var b = 2;
  if(true){
    let b = 3;
  }
  console.log(b); //출력될 값은?
}
```