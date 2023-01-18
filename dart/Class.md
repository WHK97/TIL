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
  int xp = 1500
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
## Constructors 

Constructors methid(생성자 함수)의 이름은 class의 이름과 같아야한다.
```
class Player {
  late final String name;
  late int xp;
  Player(String name, int xp) {
    this.name = name;
    this.xp = xp;
  }
  void sayHello() {
    print("Hi my name is $name");
  }
}
void main() {
  var player = Player("Lee", 1500);
  player.sayHello();
  var player2 = Player("Kim", 2500);
  player2.sayHello();
}
```
코드를 줄일수 있다
```
class Player {
  final String name;
  int xp;
  Player(this.name, this.xp);
  void sayHello() {
    print("Hi my name is $name");
  }
}

void main() {
  var player = Player("Lee", 1500);
  player.sayHello();
  var player2 = Player("Kim", 2500);
  player2.sayHello();
}
```
###  Named Constructor Parameters
positional arguments를 사용하고 있다 하지만 값 입력시 무슨 값을 입력을 하는지 모르는 문제점이 있다.
```
class Player {
  final String name;
  int xp;

  Player({required this.name, required this.xp});

  void sayHello() {
    print("Hi my name is $name $xp");
  }
}
void main() {
  var player = Player(
    name: "Lee",
    xp: 1200,
  );
  player.sayHello();
  var player2 = Player(
    name: "Kim",
    xp: 2500,
  );
  player2.sayHello();
}

```
###  Named Constructors 
Constructors method를 여러개 만드로 싶다면 
```
  Player.blueTeam({
    required name,
    required xp,
    required age,
  })  : this.age = age,
        this.name = name,
        this.xp = 0; 

  void main() {
      var player = Player.blueTeam(
        name: "Lee",
        xp: 1200,
        age: 20,
    );
  }
```
콜론(:)을 사용해서 Dart에게 여기서 Play객체를 초기화를 시키면된다
```
class Player {
  final String name;
  int xp, age;
  Player.fromJson(Map<String, dynamic> playerJson)
      : name = playerJson['name'],
        age = playerJson['age'],
        xp = playerJson['xp'];
  void sayHello() {
    print("Hi my name is $name age: $age xp: $xp");
  }
}

void main() {
  var apiData = [
    {
      "name": "Kim",
      "age": 20,
      "xp": 0,
    },
    {
      "name": "Lee",
      "age": 21,
      "xp": 0,
    },
    {
      "name": "Park",
      "age": 22,
      "xp": 0,
    }
  ];
  apiData.forEach((playerJson) {
    var player = Player.fromJson(playerJson);
    player.sayHello();
  });
}

```
## Cascade Notation
반복되는 작업을 Cascade operator를 사용해서 줄일수 있다
```
class Player {
  String name;
  int xp, age;
  Player({required this.name, required this.age, required this.xp});
  void sayHello() {
    print("Hi my name is $name age: $age xp: $xp");
  }
}
//void main() {
//  var player = Player(name: "kim", age: 20, xp: 0);
//  player.name = "Lee";
//  player.age = 21;
//  player.xp = 100;
//}
void main() {
  var player = Player(name: "kim", age: 20, xp: 0) //;지우고
  var player2 = player
    ..name = "Lee" // ..
    ..age = 21
    ..xp = 100 
    ..sayHello(); // 마지막에 세미콜론추가(;)
}
```
## Enums 
Enums는 Flutter에서 많이 사용하게 된다. 실수들을 안 만들게끔 도와준다.
```
enum Names { Kim, Lee } // 사용한 단어들을 만들어 둔다

class Player {
  Names name; // name은 이제 String아니고 Names가 된다
  int xp, age;
  Player({required this.name, required this.age, required this.xp});
  void sayHello() {
    print("Hi my name is $name age: $age xp: $xp");
  }
}

void main() {
  var player = Player(name: Names.Kim, age: 20, xp: 0); //name을 Names.작명 
  player.name = Names.Lee;
  player.age = 21;
  player.xp = 100;
}

```
## Abstract Classes (추상 메소드)
추상화 클래스는 다른클래스들이 직접 구현 해야하는 메소드들을 모아놓은 청사진 이라고 보면 된다. 
추상 클래스에서는 기능을 구현하지 않는다.
```
abstract class Human {
  void walk(); //이 메소드의 반환하는 값이 무엇인지 정의한다. 메소드의 이름과 반환타입만 정해서 정의할 수 있다
}
```
extends을 이용해 상속,확장이 가능하다.
```
abstract class Human {
void walk();
}

class Player extends Human {//Human이란 클래스는 walk라는 메소드를 가지고 있다

void walk(){ // wolk란 메소드를 가지고 있지 않으면 오류가 발생
print("working!");
}
}
```
추상화 클래스는 특정 메소드를 구현하도록 강제한다.

## Inheritance 
상속을 하고 super를 이용해 부모 클래스의 생성자를 호출할 수 있다.
```
class Human {
  final String name;
  Human({required this.name});
  void Hello() {
    print("Hi my name is $name");
  }
}

enum Team { blue, red }

class Player extends Human {
  final Team team;
  Player({
    required this.team,
    required String name, // name이란값을 받고 이 값을 Human에 전달한다.
  }) : super(name: name); //super통해 확장한 부모클래스와 상호작용을 할 수 있게 해준다.
  @override
  void Hello() {
    super.Hello();
    print("and I play for ${team}");
  }
}
void main() {
  var player = Player(team: Team.blue, name: "Kim"); //name을 Human으로 전달
  player.Hello();
}
//Player생성자에서 온 name은 그 즉시 super생성자로 전달된다. super클래스는 확장한 부모클래스를 의미한다.
//@override는 Human에서온 Hello를 우리가 직접만든 메소드로 대체(override)하는거다
```
## Mixins
Mixin은 생성자가 없는 클래스를 의미한다.
Mixin 클래스는 상속을 할 떄 extends를 하지 않고 with를 사용한다.
Mixin의 핵심은 여러 클래스에 재사용이 가능하다.
```
class Strong {
  final double strenghtLevel = 12.34;
}

class QuickRunner {
  void runQuick() {
    print("ruuuuuuuuuuun");
  }
}

class Tall {
  final double height = 1.99;
}

class Human {}

enum Team { blue, red }

class Player with Strong, QuickRunner, Tall {
  final Team team;
  Player({
    required this.team,
  });
}
// 재사용이 가능하다.
class Hores with Strong, QuickRunner {}
class Kid with Strong, QuickRunner, Tall {}

void main() {
  var player = Player(team: Team.blue);
  player.runQuick();
}
```
