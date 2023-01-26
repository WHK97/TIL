# Node.js 기초
## GET요청 처리해보기
```
const express = require('express');
const app = express();

app.listen(8080,function(){ //서버의 포트번호, 서버실행후 실행할 코드

}); 

app.get("경로",function(요청(req),응답(res)){  
  응답.send("Hello"); // 경로에 방문시 Hello를 보여준다
});
```
req: 어떤 정보를 가지고 있는지 알수 있다
res: 해당경로에 접속 했을시 어떤 식으로 요청을 할지

## HTML파일 전송하기
```
const express = require('express');
const app = express();

app.listen(8080,function(){
  console.log("listening on 8080");
});
app.get("/",function(req,res){
  res.sendFile(__dirname + '/index.html');
});
```
## Bootstrap
https://getbootstrap.com/
## POST요청
```
//write.html
  <div class="container mt-3">
    <form action="/add" method="POST">// 해당경로 get post 어떤 요청을 받을지 선택 
      <div class="form-group">
        <label>오늘의 할일</label>
        <input type="text" class="form-control" name="title">
      </div>
      <div class="form-group">
        <label>날짜</label>
        <input type="text" class="form-control" name="date">
      </div>
      <button type="submit" class="btn btn-outline-secondary">Submit</button>
    </form> 
  </div>
//server.js
  const express = require('express');
  const app = express();

  app.listen(8080,function(){
    console.log("listening on 8080");
  });
  app.get("/",function(req,res){
    res.sendFile(__dirname + '/index.html');
  });
  app.get("/write",function(req,res){
    res.sendFile(__dirname + '/write.html');
  });
  app.post("/add",function(req,res){
    res.send("success")
  })
```
요청을 보낸 데이터를 사용할려면 body-parser라이브러리 필요
server.js 추가
```
app.use(express.urlencoded({extended: true})) 
```
```
app.post("/add",function(req,res){
  console.log(req.body); //보낸값 출력
  res.send("success");
});
```
## REST API
API(Application Programming Interface):서버에게 요청해서 데이터 가져오는 방법
REST API: 서버를 만들떄 REST원칙을 지켜 API를 만들기를 권장한다.
REST 원칙
1. Uniform Interface
- 하나의 자료는 하나의 URL
- 간결하고 예측가능하게
- URL이름짓기 관습을 따르기
2. Client-server 역할 구분하기
- 브라우저, 고객한테 서버의 역활을 맡기거나 DB에 있는 자료를 꺼내서 사용하는 방식으로 코드작성을 하면 안된다.
3. Stateless
- 요청들은 각각 독립적으로 처리되어야한다.(요청1이 성공해야만 요청2가 처리되는 식은 안된다.)
4. Cacheable
- 요청을 통해 보내는 자료들은 캐싱이 가능해야한다. *캐싱:브라우저에 바뀔일이 거이없는 이미지,CSS파일을 하드에 저장 해당 사이트 방문시 해당서버에 요청하지 않고 하드에서 불러온다.
5. Layered System
- 요청하는곳, DB저장하는곳 여러가지 단계를 거쳐서 요청을 처리해도 된다.
6. Code on Demand
- 서버는 고객에게 실행 가능한 코드를 전송해줄 수도 있다.