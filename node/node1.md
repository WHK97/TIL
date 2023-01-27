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
#### URL 이름짓기
facebook.com/natgeo/photos
facebook.com/bbc/photos
- 단어들을 동사보다는 명사 위주로 구성
- 응용해서 다른 정보들을 쉽게 가져올 수 있을 정도로 일관성 있음 
- 어떤 정보가 들어올지 예측이 가능함 
이외에도 이름을 잘 지을 수 있는 방법
- 띄어쓰기는 언더바_대신 대시-기호-사용
- 파일 확장자 쓰지 말기 (.html 이런거)
- 하위 문서들을 뜻할 땐 / 기호를 사용함 (하위폴더같은 느낌)
## MongoDB 사용해보기
DB종류
1. 관계형 SQL: MySQL,Oracle 가로세로 열로 되어있다
2. NoSQL : MongoDB Object자료형으로 입출력이 가능

MongoDB
https://www.mongodb.com/cloud/atlas/lp/try4?utm_content=rlsavisitor&utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_retarget-brand_gic-null_apac-all_ps-all_desktop_eng_lead&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=14412646476&adgroup=131761130772&cq_cmp=14412646476&gclid=CjwKCAiA5sieBhBnEiwAR9oh2klny-fgBW6O6jwgltV_f23eGHkLfOONSWeT1NsgxdQ7fYVWbJT9wRoC1X8QAvD_BwE

mongodb 설치
```
npm install mongodb
```
mongodb연결하기
MongoClient.connect('URL',function(err,client){
    app.listen(8080,function(){
    console.log("listening on 8080");
  });
});
```
//server.js
const MongoClient = require('mongodb').MongoClient;
```
## Database에 지료저장해보기
```
var db; //변수 생성
MongoClient.connect('mongodb+srv://admin:dyd97849784@cluster0.bfin3cb.mongodb.net/?retryWrites=true&w=majority', (err, client) => {
  if (err) {
    return console.log("에러");
  }
  db = client.db('todoapp'); // 어떤 DB에 저장을 할 것인지 작성
  db.collection('collection명').insertOne('저장할 데이터'(Object자료형으로 저장),function(err,결과){
    
  }); 
  app.listen(8080, function () {
    console.log("listening on 8080");
  });
});
```
### 작성한 내용 저장하기
```
app.post("/add", function (req, res) {
  db.collection('post').insertOne({title:req.body.title,date:req.body.date},function(err,res){
    if(err){return console.log("에러");}
    console.log("저장완료");
  });
  res.send("success");
});
```
### 저장한 데이터 보여주기
ejs파일은 views폴더안에 있어야한다.
ejs라이브러리 설치
```
npm install ejs
```
ejs적용
```
app.set('view engine','ejs');

app.get('/list',function(req,res){
  res.render('list.ejs');
})
```
데이터 받기
```
<div>
  <h4>제목:<%= 변수이름%></h4>
  <p>날짜:</p>
</div>
```
DB에 저장된 내용 꺼내기
```
//server.js
app.get('/list',function(req,res){
  db.collection('post').find().toArray(function(err,결과){//DB에 있는 모든 데이터 꺼내기
  res.render('list.ejs',{작명: 결과});
  }); 
})
//list.ejs
    <div>
      <h4 할일:<%=작명[0].title%></h4>
      <p>마감날짜:<%=작명[0].date%></p>
      <button type="button"  aria-label="Close"></button>
    </div>
    //반복문 사용하기
     <% for (let i = 0; i < 작명.length; i++){ %>
      <div class="card w-75 mb-3">
       <div class="card-body">
        <h4 class="card-title">할일:<%=작명[i].title%></h4>
        <p class="card-text">마감날짜:<%=작명[i].date%></p>
        <button type="button" class="btn-close" aria-label="Close"></button>
      </div>
    </div>
  <%}%>
```
### DB에 데이터 수정하기 
게시물 번호 달기
```
app.post("/add", function (req, res) {
  db.collection('counter').findOne({name:"게시물갯수"},function(err,res){
    console.log(res.totalPost);
    let totalCount = res.totalPost;
  db.collection('post').insertOne({title:req.body.title,date:req.body.date,_id: totalCount},function(err,res){
      if(err){return console.log("에러");}
      console.log("저장완료"); 
      db.collection('counter').updateOne({name:"게시물갯수"},{operator:{totalPost:1}},function(){});
    });
    totalCount++;
  });

  res.send("success");
});
```
operator: $set = 값을 바꿀때, $inc = 기존값에 더해줄떄
## Ajax로 삭제요청
Ajax는 서버랑 통신할 수 있게 도와주는 JS문법
```
//list.ejs
  <script>
    $('.delete').click(function(e){
      let idNumber = e.target.dataset.id;
      var now = $(this);
      $.ajax({
      method: "DELETE",
      url:"/delete",
      data: {_id :idNumber }
    }).done(function (res) {
      console.log("성공");
      now.parent('li').fadeOut();
    }).fail(function(xhr,textStatus,errorThrown){
      alert(xhr,textStatus,errorThrown)
    });
    });
  </script>
//server.js
app.delete('/delete',function(req,res){
  req.body._id = parseInt(req.body._id);
  console.log(req.body);
  db.collection('post').deleteOne(req.body,function(err,결과){
    console.log("삭제완료");
    res.status(200).send({message:'성공'});
    if(err){return res.status(400)}
  })
}); 
```
## URL parameter (detail페이지만들기)
```
//detail.ejs 
<div class="card-body">
  <h5><%= data.title %></h5>
   <h6><%= data.date %></h6>
</div>
//server.js
app.get('/detail/:id',function(req,res){
  db.collection('post').findOne({_id : parseInt(req.params.id)},function(에러,결과){
    console.log(결과);
    res.render('detail.ejs',{data:결과});
  });
})
```