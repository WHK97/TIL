# Flutter 시작하기
## Flutter 프로젝트 생성
```
flutter create 작명
```
## Flutter
레고블록 처럼 위젯에 위젯을 쌓아가며 앱을 만든다
https://docs.flutter.dev/development/ui/widgets
모든 위젯은 build매서드를 사용해야한다.
모든 앱은 CupertinoApp(Apple) 또는 MeterialApp중에 사용하며 MeterialApp을 주로 사용을 한다.
모든 화면은 Scaffold구조를 가져야한다.
(Scffold: NaviBar, bottomTabBar, button, 중앙정렬등을 해준다)
```
class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
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