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
