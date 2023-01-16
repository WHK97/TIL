# Class
Class에서 property를 선언할때는 타입을 사용해서 정의한다.
```
class Player {
  String name = "Kim";
  int xp = 1500;
}

void main() {
  var player = Player(); // Player인스턴스 하나가 생성된다.
  print(player.name);
}

```
Class의 값을 바뀌지 못하게 할 수 있다
```
class Player {
  final String name = "Kim"; //finall을 추가 해준다.
  int xp = 1500;
}
```
Class안에 메소드(함수)를 추가 할 수 있다.
```
class Player {
  final String name = "Kim";
  int xp = 1500;
  void sayHello() {
    print("Hi my name is $name"); //Class 함수 안에서는 변수명이 중복되지 않는 이상 this키워드는 쓰지 않는다.
  }
}
void main() {
  var player = Player();
  print(player.name);
  player.sayHello();
}

```
