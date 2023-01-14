# Functions
## Defining a Function
Dart는 객체 지향언어이므로 함수도 객체이며 타입이 function이다.
함수를 변수에 할당하거나 다른함수에 인구로 전달할 수 가 있다
```
void main(){

}
void a(파라미터타입 파라미터명){
    print("Hello my name is $파라미터명");
}
```
void는 이 함수가 아무것도 return 하지 않는 의미이다 
```
String Hello(String name) {
  return "Hello my name is $name";
}

void main() {
  print(Hello("Kim"));
}

```
곧바로 return하는 function을 사용할떄는
```
String Hello(String name) => "Hello my name is $name";

void main() {
  print(Hello("Kim"));
}
```
fat arrow syntax로 곧바로 return을 할 수 있다 만약 api호출하거나 계산하는 함수라면 {}쓰고 마지막에 리턴을 해야한다 arrow syntax는 한줄일 때 주로 사용한다
## Named Parameters
Dart의 function은 Named Parameters를 지원한다 (Flutter에 자주 사용되는 개념)
Named Parameters는 명시적으로 required로 표시 되지 않는 한 선택사항이다.
기본값을 제공하지 않거나 Named Parameters를 필수로 표시하지 않으면 해당 유형은 기본값이 null이 되므로 null을 허용해야한다.
```

```