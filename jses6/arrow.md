# Arrow Function 연습
1. 
```
var men = {
  name: '손흥민',
}

men.sayHi(); //안녕 나는 손흥민 출력하기
```
```
var men = {
  name: '손흥민',
  satHi: ()=>{
    console.log('안녕 나는' + name);
  }
}
men.satHi();
```
2. 
```
var 자료 = { 
  data : [1,2,3,4,5] 
}
자료.전부더하기();
```
답
```
var 자료 = { 
  data : [1,2,3,4,5],
  전부더하기 : function(){
    let i = 0
    this.data.forEach(a => {
      i = i + a;
    });
    console.log(i);
  }
}

자료.전부더하기();
```
3. 
```
<button id="버튼">버튼이에요</button>

<script>

  document.getElementById('버튼').addEventListener('click', function(){
    console.log(this.innerHTML); // 1초뒤 출력하기
  });

</script>
```
답
```
  <button id="버튼">버튼이에요</button>
  <script>
  document.getElementById('버튼').addEventListener('click', function(){
    setTimeout(  ()=> {console.log(this.innerHTML)},1000)
  });
  </script>
```