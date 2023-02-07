# this & arrow
## this 키워드
```
console.log(this);
function a(){
  console.log(this);
}
a();
```
this를 그냥 쓰거나 함수안에서 쓰면 {window}를 뜻한다.
#### (this)strict mode
```
'use strict';
a = 10; // X
var b =20; // O
function a(){
  console.log(this); // undefined
}
a();
```
JavaScript 최상단에 추가하면 strict mode로 작성이 가능하다. var키워드 없이 변수를 선언하거나 변수를 arguments라는 키워드로 선언하는 실수를 방지해준다.
this키워드를 일반함수 안에서 불렀을떄 undefined 값으로 강제로 지정해준다.
#### (this)object
```
let obj = {
  data: "Kim",
  함수: function(){
    console.log(this); 
 }
}
obj.함수; // {data: 'Kim', 함수: ƒ}
```
오브젝트 내 함수안에서 사용을 할 경우 그 함수를 가지고 있는 오브젝트를 뜻한다.
```
let obj = {
  data: {
    함수: function(){
      console.log(this);
    }
  }
}
obj.data.함수(); // {함수: ƒ}
``` 
만약 오브젝트안에 오브젝트를 넣을경우 this는 data를 뜻한다.
```
let obj = {
  data: {
    함수: () => {
      console.log(this);
    }
  }
}
obj.data.함수();//{window}
```
arrow function을 사용 할 경우 this 값을 함수밖에 있던 그대로 사용을 한다.

```
//window{
function a( ){
  console.log(this);
}
a();
window.a(); // 같은 의미이다.
//}
```
window는 함수나 변수를 전역공간에서 만들면 {window}에 보관을 하게 된다.우리가 자바스크립트를 짜면 {}안에 작성을 하기때문이다
#### (this)constructor
JS에서 오브젝트를 비슷한걸 여러게 민들고 싶을 경우 오브젝트를 복사하는게 아니라 constructor를 만들어 사용을 한다.
constructor는 오브젝트 복사를 해주는 장치이다.
```
function 복사(){
  this.name = "KIM" // this는 이 함수로 부터 새로생성되는 오브젝트이다(instance).
}
let obj = new 복사(); //obj를 출력을 하면 복사 {name: 'KIM'}
```
#### (this)이벤트리스너
이벤트리스너에서 this는 e.currentTarget과 비슷하게 해석이 된다.
지금 이벤트가 동작을 하는곳을 뜻한다.
```
document.getElementById('btn').addEventListener('click',function(e){
  console.log(this);
  console.log(e.currentTarget);
});
```
#### this 예제
```
// 1
document.getElementById('btn').addEventListener('click',function(e){
    [1,2,3].forEach(function(a,i){
    console.log(this); //일반함수로 사용이 되었기 떄문에 {window}가 출력이 된다.
  });
});
// 2
var obj = {
  name : ['kim','lee','park'],
  함수 :function(){
    console.log(this); //obj출력
    obj.name.forEach(function(a){
      console.log(this); //{window}출력
    });
  }
}
obj.함수();
// 3
var obj = {
  name : ['kim','lee','park'],
  함수 :function(){
    console.log(this); //obj출력
    obj.name.forEach((a) =>{
      console.log(this); //obj출력
    });
  }
}
obj.함수();
```
## arrow function
```
function 함수1(){

}
let 함수2 = function(){

}
// arrow 함수
let 함수3 = () =>{
  
}
```
함수를 사용하는 이유
1. 코드들을 기능으로 묶고 싶을 떄 사용 (재사용)
2. 입출력 기계를 만들고 싶을떄 사용 ex) let 함수3 = (a) =>{return a + 10};
Arrow 함수의 장점
1. 입출력 기계 만들떄 보기가 쉽다
2. 파라미터가 한개일때 소괄호 생략가능 ex) let 함수3 = a =>{return a + 10};
3. 코드가 한줄일경우 중괄호 생략가능 ex) let 함수3 = a => a + 10;
#### arrow function 예시
1. forEach 콜백함수
```
//function
[1,2,3,4].forEach(function(a){
  console.log(a);
});
//arrow function
[1,2,3,4].forEach(a=>console.log(a) );
```
2. 이벤트리스너
```
document.getElementById('btn').addEventListener('click',function(e){
  console.log(this);
  console.log(e.currentTarget);
});
//arrow
document.getElementById('btn').addEventListener('click',e =>console.log(e.currentTarget));
```
이벤트리스너에서 arrow 함수를 쓸 경우 this 값이 달라지기 때문에 주의해야한다.
3. Object안의 함수

```
let obj = {
  함수 : function(){
        
  }
}
//arrow
let obj = {
  함수 : () => {
    
  }
}
```
<li><a href="./arrow.md">arrow연습하기</a></li>