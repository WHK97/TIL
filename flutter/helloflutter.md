# Flutter 시작하기
## Flutter 프로젝트 생성
```
flutter create 작명
```
## Flutter Widget
레고블록 처럼 위젯에 위젯을 쌓아가며 앱을 만든다
https://docs.flutter.dev/development/ui/widgets
모든 위젯은 build매서드를 사용해야한다.
모든 앱은 CupertinoApp(ios) 또는 MeterialApp디자인 중에 사용하며 MeterialApp을 주로 사용을 한다.
모든 화면은 Scaffold구조를 가져야한다.
(Scffold: NaviBar, bottomTabBar, button, 중앙정렬등을 해준다)
```
class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) { //Widget build메서드
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("Hello Flutter"),
        ),
        body: Center(child: Text("Hello World")),
      ),
    );
  }
}
```
### classes
Widget은 다 Class이다. Widget에 마우스를 갖다 대면 constructor을 확인 할 수 있다 
1. 우리가 지금 하고 있는 것 처럼 Widget을 사용할 때마다 Class를 인스턴스화 하고 있다.