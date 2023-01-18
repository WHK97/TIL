# React JSX
Reat는 HTML인 아닌 JSX를 사용한다. JSX는 js파일에서 쓰는 HTML대용품이다.
1. html에 class 넣을 땐 className
```
<div className="App">
 </div>
```
class를 쓸경우 JS의 예약어 class로 인식을 한다.

2. 데이터바인딩
변수를 넣고 싶을때 {}를 사용해야한다.

```
let num = 1;
<div>
    <h4>{num}</h4>
</div>
```
id, className등에서도 가능하다

3. style 
스타일을 사용하고 싶을떄는 style={{스타일명:'값'}}

```
let num = 1;
<div style={{color:'red',fontSize:"16px"}}>
    <h4>{num}</h4>
</div>

```
React에서 -기호를 뺄셈기호로만 인식하기 떄문에 카멜케이스로 작성해야한다.