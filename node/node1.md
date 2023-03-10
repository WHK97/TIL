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
app.get('/detail/:id',function(req,res){//post DB안에 _id가 주소id와 같은 번호를 찾기
  db.collection('post').findOne({_id : parseInt(req.params.id)},function(에러,결과){
    console.log(결과);
    res.render('detail.ejs',{data:결과});
  });
})
```

## 수정기능
from에서 PUT, DELETE하기
```
// 터미널
npm install method-override
//server.js
const methodOverride = require('method-override')
app.use(methodOverride('_method'))
//form
<form action="/edit?_method=PUT" method="POST"> // form은 POST GET만 사용가능
</form>
```
```
//edit.ejs
<form action="/edit?_method=PUT" method="POST">
  <div class="form-group">
    <label>오늘의 할일</label>
    <input type="text" name="id" style="display: none;" value="<%=data._id%>">
    <input type="text" class="form-control" name="title" value="<%= data.title%>">
  </div>
   <div class="form-group">
     <label>날짜</label>
      <input type="text" class="form-control" name="date" value="<%= data.date%>">
  </div>
   <button type="submit" class="btn btn-outline-secondary">수정</button>
</form> 
//server.js
app.put('/edit',function(req,res){
  db.collection('post').updateOne({_id:parseInt(req.body.id)},{$set:{title:req.body.title,date:req.body.date}},function(err,결과){
    res.redirect('/list')
  });
})
```
## 회원인증 방법
1. session-based 
로그인을 하면 서버는 쿠키(브라우저에 저장할 수 있는 공간)를 발행을 한다. 사용자가 로그인이 필요한 페이지를 요청하면 세션을 확인해 이 사람이 로그인 했다는 정보가 있을 경우 보여준다.
2. JSON Web Token (JWT)
토큰 방식은 세션데이터를 서버에 저장하지 않고 마이페이지를 열람할 수 있는 열쇠(토큰)을 사용자에게 준다. 열쇠에는 세션방식보다 더 많은 정보가 들어간다.
서버는 세션데이터 등을 메모리/DB에 저장해둘 필요가 없어 나중에 서버 스케일링시 큰 문제가 없다는 장점도 있다. 단점은 보안에 취약하다.
3. Open Autentication
구글,애플,카카오 로그인이다. 사용자의 구글,애플,카카오계정정보를 가져와 가입승인을 한다.
## session방식으로 회원인증 구현
```
npm install passport passport-local express-session // 3가지 라이브러리 설치
// server.js 추가
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
// (app.use)미들웨어(요청-응답 중간에 실행되는 코드) 추가
app.use(session({secret : '비밀코드', resave : true, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session()); 
```


```
//login
app.get('/login',function(req,res){
  res.render('login.ejs');
});
app.post('/login',
passport.authenticate('local',{failureRedirect : '/fail'}), 
function(req,res){
  res.redirect('/')
});
// 검사
passport.use(new LocalStrategy({
  usernameField: 'id', //login.ejs에 <input name>이 id인값
  passwordField: 'pw',
  session: true,
  passReqToCallback: false, // 아이디,비번말고 다른정보 검증시 true
}, function (입력한아이디, 입력한비번, done) { //파라미터 추가
  //console.log(입력한아이디, 입력한비번);
  db.collection('login').findOne({ id: 입력한아이디 }, function (에러, 결과) {
    if (에러) return done(에러)

    if (!결과) return done(null, false, { message: '존재하지않는 아이디요' })
    if (입력한비번 == 결과.pw) {
      return done(null, 결과)
    } else {
      return done(null, false, { message: '비번틀렸어요' })
    }
  })
}));
//세션만들기
//암호화를 해서 세션을 저장시키는 코드
passport.serializeUser(function(user,done){ //위 검사코드의 결과가 user에 들어간다.
  done(null,user.id);
});
//(마이페이지 접속시) 이 세션 데이터를 가진 사람을 DB에서 찾기
passport.deserializeUser(function(아이디,done){
  //DB에서 user.id로 유저를 찾은 뒤 유저 정보를 done(null,결과);에넣어준다 user.id와 {id: 아이디}같다
  db.collection('login').findOne({id: 아이디},function(err,결과){

    done(null,결과);
  })
});

// mypage
app.get('/mypage',login,function(req,res){
  console.log(req.user);
  res.render('mypage.ejs',{사용자:req.user});
});
function login(res,req,next){
  if(res.user){
    next();
  }else{
    req.send("로그인을 해주세요");
  }
}
```
## (GET요청)검색기능
### URL query string
```
    $('.search').click(function(){
      let searchValue = $('#search-input').val();
      window.location.replace('/search?value='+searchValue); // 검색버튼 누르면 서버로 query string이 포함된 GET요청을 한다.
    })
    //
    app.get('/search',(req,res)=>{
  db.collection('post').find({title:req.query.value}).toArray((err,결과)=>{
    console.log(결과);
    res.render('search.ejs',{posts:결과})
  })
  //console.log(req.query.value);//body가아닌 query에 들어 있다.
});
```
위 코드는 문제점은 정확하게 타이틀과 맞아야 검색이 된다.
정규식,indexing을 사용해서 문제를 해결해야한다.
정규식을 사용할 경우 검색의 양이 많을 수록 찾는 속도가 느리다
indexing을 사용하면 빠르게 찾을 수 있다. 
indexing을 할려면 DB의 Binary Search를 사용해야 한다. Binary Search는 1부터100의 데이터가 있으면 검색한 데이터가 50이상입니까? 물어보며 예,아니오로 범위를 좁혀 찾는다. 하지만 사용을 할려면 숫자와 문자가 정렬이 되어있어야한다.
MongoDB index생성:원하는 collection안에서 indexess에서 생성하면 된다 
```
{
  "title": "text", //문자
  "_id"  : 1  //숫자
}
```
text형식을 등록할때 하나씩 등록을 하는게 아니라 한번에 등록을 해야한다.
### Search index
```
app.get('/search',(req,res)=>{
  let 조건 = [{
    $search:{
      index:"titleSearch",
      text:{
        query: req.query.value,
        path: "title"
      }
    }
  },
  
]
  db.collection('post').aggregate(조건).toArray((err,결과)=>{
    console.log(결과);
    res.render('search.ejs',{posts:결과})
  })
  //console.log(req.query.value);//body가아닌 query에 들어 있다.
});
```
## 회원 기능 이용하기
```
// 회원가입
app.post('/register',(req,res)=>{
  db.collection('login').insertOne({id:req.body.id,pw:req.body.pw},()=>{
  });
  res.redirect('/');
})
//delete
app.delete('/delete',function(req,res){
  req.body._id = parseInt(req.body._id);
  let deleteData = {_id:req.body_id,writer:req.user._id} // 작성자와 같은 사람만 삭제
  db.collection('post').deleteOne(deleteData ,function(err,결과){
    console.log("삭제완료");
    res.status(200).send({message:'성공'});
    if(err){return console.log("작성자가 아닙니다.");}
  })
}); 
// 글작성 페이지
app.post("/add", function (req, res) {
  db.collection('counter').findOne({name:"게시물갯수"},function(err,res){
    console.log(res.totalPost);
    let totalCount = res.totalPost;
    let saveData = {title:req.body.title,date:req.body.date,_id: totalCount,writer:req.user._id};// 작성자: id추가해서 DB에 저장
  db.collection('post').insertOne(saveData,function(err,res){
      if(err){return console.log("에러");}
      console.log("저장완료"); 
      db.collection('counter').updateOne({name:"게시물갯수"},{$inc : {totalPost:1}},function(err,res){
        if(err){return console.log("err");}
      
      });
    });
  });
  res.redirect("/list");
});
```
## router폴더 API관리 하기
server.js에 모든 요청을 작성을 하면 나중에 코드 수정,찾기가 어렵다. 비슷한 요청끼리 routes폴더안에 묶는 걸 추천한다.
```
// ./routes/파일명.js
let router = require('express').Router();
router.get('/1/1',(req,res)=>{
  res.rend('1번페이지');
});
router.get('/1/2',(req,res)=>{
  res.rend('1번페이지');
});
// Js파일을 다른곳에서 사용하고 싶을떄 사용한다.module.exports = 내보낼 변수명;
module.exports = router;

// server.js
app.use('/',require('./routes/파일명')); 

```
만약 중복된 주소가 있을 경우
```
// ./routes/파일명.js
let router = require('express').Router();
router.get('/1',(req,res)=>{
  res.rend('1번페이지');
});
router.get('/2',(req,res)=>{
  res.rend('1번페이지');
});
// server.js
app.use('/1',require('./routes/파일명')); 

```
routes안에 로그인 유무같은 미들웨어를 적용해야 될떄가 있다 
```
let router = require('express').Router();
router.use('/특정주소',login); //적용할 곳이 여러곳일떄 또는 특정한 곳만 정할떄
router.get('/sports',login,(req,res)=>{ //하나만 있을떄 
  res.send("스포츠");
});
function login(res,req,next){
   if(res.user){
    next();
  }else{
    req.send("로그인을 해주세요");
   }
 }
module.exports = router;
```
## 이미지 업로드 & 이미지 서버 만들기
npm install multer 파일전송 라이브러리
```
let multer = require('multer');
let storage = multer.diskStorage({ // diskStorage:하드디스크에 저장 ,memoryStorage:램에 저장 (휘발성이 있다.)
  destination: function(req,file,cb){
    cb(null,'./public/image') //이미지파일을 저장할 경로
  },filename: function(req,file,cb){
    cb(null,file.originalname); // 저장된 파일명설정
  }
});
let upload = multer({storage : storage});
app.get('/upload',(req,res)=>{
  res.render('upload.ejs');
});
app.post('/upload',upload.single('input의 name속성'),(req,res)=>{
  res.send('성공');
});
app.get('/image/:imageName', function(요청, 응답){ // 저장한 파일 불러오기
  응답.sendFile( __dirname + '/public/image/' + 요청.params.imageName )
})
```
## 채팅
```
// server.js
app.post('/chatroom',login,(req,res)=>{
  let data = {
    title: "채팅방",
    member : [ObjectId(req.body.yourid), req.user._id],
    date : new Date()
  };

  db.collection('chatroom').insertOne(data).then((err,결과)=>{
    console.log("성공");
  });

});
app.get('/chat', login, function(요청, 응답){ 
  db.collection('chatroom').find({ member : 요청.user._id }).toArray().then((결과)=>{
    console.log(결과);
    응답.render('chat.ejs', {data : 결과})
  })

}); 
app.post('/message', login, function(req, res){ 
  let data = {
    parent: req.body.parent,
    content: req.body.content,
    userid:ObjectId(req.user._id),
    date: new Date()
  }
  db.collection('message').insertOne(data).toArray().then((결과)=>{
    console.log('성공');
  });

}); 
//chat.js
    let clickId;
    let eventSource
    $('.list-group-item').click(function(){
      clickId = this.dataset.id;
      eventSource = new EventSource('/message/' + clickId);
      eventSource.addEventListener('test',function(e){
        let myText = `<li><span class="chat-box mine">${JSON.stringify(e.data)}</span></li>`
        console.log(JSON.stringify(e.data));
        $('.chat-content').append(myText);
       })
    });
    $('#send').click(function(e){
      let text = $('#chat-input').val();
      let info = {
       parent : clickId,
       content: text 
      }
      $.post('/message',info).then(()=>{
        console.log('성공');
      });
    });
```
### 서버와 실시간 소통(SSE)
1. get요청 계속 날리기 (유저가 많으면 서버에 무리가 온다)
2. 서버와 유저간 실시간 소통채널 열기(Server Sent Events)
실시간 소통채널 열기
```
//server.js
app.get('/message/:parentid', login, function(req, res){

  res.writeHead(200, {
    "Connection": "keep-alive",
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
  });
  //유저에게 데이터 전송
  res.write('event: test\n'); //'event: 보낼데이터 이름\n'
  res.write('data: 안녕하세요\n\n'); //'data: 보낼데이터\n\n' 

});
//
//유저가 데이터 수신
eventsource = new EventSource('/message/:parentid'); //get요청
eventsource.addEventListener('test',function(e){ //res.write('event: test\n'); 데이터명
  e.data;
})
```
지속적으로 서버에 응답을 하고 싶은 경우 
1. Header 라는 정보의 connection 항목을 keep-alive로 설정
2. res.write('안녕하세요') 계속 유저에게 지속적으로 응답이 가능하다.
Header란?
서버와 유저가 get,post http 요청으로 주고 받을 때 부가정보도 몰래 전달 된다.
유저의 경우 사용하는 브라우저,OS,쓰는 언어, 보유한 쿠기등 몰래 서버에 전달된다.
반대로 서버도 응답시 유저에게 몰래 서버정보를 전달한다. 이 정보를 보관을 하는 곳은 Header라고 한다.
유저 -> 서버 이렇게 전달되는 Header는 Request Header,
서버 -> 유저 이렇게 전달되는 Header는 Response Header
Header가 어떻게 생겼는지 보고싶으면 크롬 개발자도구 Network 탭가면 된다. 
```
//server.js
app.get('/message/:id', login, function(req, res){
  res.writeHead(200, {
    "Connection": "keep-alive",
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
  });
  db.collection('message').find({parent: req.params.id}).toArray().then((결과)=>{
    res.write('event: test\n');
    res.write(`data: ${JSON.stringify(결과[0].content)}\n\n`);
  });
});
//chat.js
    let clickId;
    let eventSource
    $('.list-group-item').click(function(){
      clickId = this.dataset.id;
      $('.chat-content').html('');
      if(eventSource != undefined){
        eventSource.close()
      }
      eventSource = new EventSource('/message/' + clickId);
      eventSource.addEventListener('test',function(e){
        let dataText = JSON.parse(e.data)
        dataText.forEach(function(i){
          $('.chat-content').append(`<li><span class="chat-box mine">${i.content}</span></li>`);
        });
       })
```
#### 실시간 업데이트 
MongoDB Cnange Stream
```
app.get('/message/:id', login, function(req, res){

  res.writeHead(200, {
    "Connection": "keep-alive",
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
  });
  db.collection('message').find({parent: req.params.id}).toArray().then((결과)=>{

    res.write('event: test\n');
    res.write(`data: ${JSON.stringify(결과)}\n\n`);
  });
  // Cnange Stream
  const pipeline = [ 
    {$match:{'fullDocument.parent': req.params.id}} //원하는 document만 찾고 싶다면
  ];
  const collection = db.collection('message');
  const changeStream = collection.watch(pipeline);
  changeStream.on('change',(result)=>{
    console.log(result.fullDocument); //DB도큐먼트 보기
     res.write(`data: ${JSON.stringify(result.fullDocument)}\n\n`); //DB에 변동이 생기면 응답하기
  })
});

```
