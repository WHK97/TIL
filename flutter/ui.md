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