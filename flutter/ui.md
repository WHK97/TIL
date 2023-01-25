# UI
## Header 만들기
모든 UI요소들이 하나씩 다른 것 위에 쌓여있다. 수직적 구조이다. 이걸 만들기 위해 Column이라는 Widget을 사용할 거다
Column은 하나의 child만 가지고 있지 않다. 대신 children라는 List가 있다.
```
import 'package:flutter/material.dart';

void main() {
  runApp(App());
}

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Color(0xFF181818),
        body: Padding(
          //Padding 위젯은 chile가 필요
          padding: EdgeInsets.symmetric(horizontal: 40), //horizontal 좌우에 패딩값
          child: Column(
            children: [
              SizedBox(
                height: 80,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.end,
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      Text(
                        "Hey, Kim",
                        style: TextStyle(
                            color: Colors.white,
                            fontSize: 38,
                            fontWeight: FontWeight.w600),
                      ),
                      Text(
                        "Welcome back",
                        style: TextStyle(
                          color: Colors.white.withOpacity(0.5),
                          fontSize: 15,
                        ),
                      ),
                    ],
                  )
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}

```
#### Padding
padding: EdgeInsets.only(value) 지정해서 padding값을 줄 수 있다.
padding: EdgeInsets.all(value) 모든값
padding: EdgeInsets.symmetric(vertical:30, horizontal: 40) 상하 또는 좌우 값
### Column Row차이
#### Column
Column은 서로의 값을 위 아래에 놓고 싶을 떄 사용
Column의 MainAxis 수직(세로) crossAxis 수평(가로)
#### Row
Row은 옆에 놓고 싶을 때 사용한다.
Row의 MainAxis 수평(가로) crossAxis 수직(세로)
## VSCODE Setting
Dart에서 코드를 작성할때 const constructors는 const를 사용하는 것을 추천한다.
color의값 같은 것은 변화가 없기 떄문에 const를 사용 하는 것을 추천한다. 하나하나 const를 추가 하기 귀찮기 떄문에 
```
    "editor.codeActionsOnSave": {
        "source.fixAll": true
    },
```
User settimg.json 파일에 추가 해준다
## Reusable Widgets
비슷한 위젯을 사용을 할려면 드레그후 복사 붙이기를 해야한다. 잘못할 경우 오류가 생길 수가있기때문에 Reusable Widgets을 만들어 준다
재사용하고 싶은 위젯부분을 드레그 한후 ctrl + .Extract Widget 매소드작명을 하면 Reusable Widgets생성이 된다.
