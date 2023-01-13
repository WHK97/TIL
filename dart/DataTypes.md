# Dart Data Types
## 기본 데이터 타입
Dart의 기본 데이터 타입을 포함란 대부분의 타입들은 객체로 이루어져 있다(함수도객체)
```
void main(){
    String name = "Kim";
    bool TF = true;
    int age = 20;
    double age2 = 1.1;
    num x = 10;
    num y = 1.1111;
}
```
int double은 num을 포함하고 있다. num을 사용하면 정수,소수 모두 사용이 가능하다.
## List
Dart에서 list를 선언하는 방법은 두가지가 있다.
1. var a = [1,2,3];
2. List a = [1,2,3]; 
2번의 경우 Type이 다이나믹으로 만들어 지며 List<int> a = [1,2,3]; 타입을 지정할 수 있다
```
void main(){
    var case1 = [1,2,3,4];
    List case2 = [1,2,3,4];
    List <int> case3 = [1,2,3,4];
}
```
### collection if와 collection for
Dart의 유용한점은 collection if와 collection for를 지원한다
#### collection if
collection if를 사용하면 존재할 수도 안할 수도 있는 요소를 가져 올 수 있다.
```
void main(){
    var num = true;
    int case1 = [1,2,3,if(num)4,]; //1,2,3,4 출력
}
```
#### collection for
List를 생성할 때 조건에 따라 element를 추가할 수 있다
```
void main(){
    var name = [
        "Lee",
        "Kim"
    ];
    var newName = [
        "Han",
        "Park",
        for (var names in name) "★ $names",
    ];
    print(newName);
}
```
newName안에 name리스트의 내용을 추가 할 수 있고 문자를 붙혀서 넣을 수 있다
## String interpolation
String interpolation은 text에 변수를 추가하는 방법이다
```
void main(){
    var name = "Kim";
    int age = 20;
    var Hello = "Hello my name is $name I'm ${age}"
} 
// ${변수명}을 사용하여 문자 중간에 변수를 넣을 수 있다
```
## Maps
Map은 JavaScript의 object와 같은 기능이다.
```
void main(){
    var case = {
        //Key: Value
        "first": 1,
        "second": 2,
    }
    Map<List<int>,bool> name={
	    [1,2,3]:true,
    }
    List<Map> a = [
        {'name': 'Lee','age': 20,},
        {'name': 'Kim','age': 22,},
    ];
}
```
## Sets
Set에 속한 모든 아이템들이 유니크해야될 떄 사용한다.
유니크(중복X)할 필요가 없다면 List를 사용하면된다. 

Set선언
```
void main(){
    var num = {1,2,3,4};
    Set<int> number = {1,2,3,4};
}
```
```
void main(){
	var num = {1,2,3,4}; 
	num.add(1);
	num.add(1);
	num.add(1);
	print(num);
}
```
위의 값을 출력하면 1,2,3,4,1,1,1이 출력 될꺼 같지만 1,2,3,4만 출력이 된다. 중복되는 값을 추가 하고 싶다면 List를 사용해야한다
