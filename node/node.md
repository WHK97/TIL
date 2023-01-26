# Node.js
## 서버란?
클라이언트의 요청을 받으면 서비스,데이터를 제공하는 컴퓨터 혹은 프로그램이라고 한다.
즉 요청을 받으면 데이터를 보내주는 걸 말한다.
### 서버에 요청 4가지 방법
1. 읽기(GET)요청 (웹페이지를 읽을떄)
2. 쓰기 혹은 생성(POST)요청 (글작성, 로그인)
3. 수정(PUT)요청 (글, 댓글 수정)
4. 삭제(DELETE)요청 (글, 댓글 삭제)
## Node.js란?
Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임(실행창)이다.
### Node.js 특징
#### Non-blocking I/O
일반서버일 경우 4개의 요청이 들어오면 처음 부터 차례로 하나씩 처리를 해준다.
오래걸리는 요청일 경우 다음 요청을 처리하는데 까지 시간이 오래걸린다.
Node.js로 개발한 서버일경우 4개의 요청을 전부 받은후에 빨리 완료가 되는 순서대로 요청을 처리를 한다.
## Node.js 시작하기
1. Node.js 설치하기 
https://nodejs.org/ko/ 
2. VSCODE 설치
3. 폴더 생성후 VSCODE로 오픈
4. npm 설치 (npm: express라이브러리설치를 도와주는 도구)
터미널 오픈 
```
npm init
```
express 설치
```
npm install express
```
nodemon설치 서버자동실행
```
npm install -g nodemon
nodemon server.js //서버실행
```
보안오류 (PowerShell 관리자권한 실행)
```
executionpolicy
set-executionpolicy unrestricted
```