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
```
String Hello(String name, int age, String country) {
  return "Hello $name, you are $age, and you come from $country";
}
void main() {
  print(Hello("Kim", 20, "korea"));
}

```
위 코드는 좋은 코드는 아니다. 사용자가 요소의 순서들을 잊어버릴수 있고 해당하는 요소가 무엇인지 확인하기 어렵기 때문이다. named argument를 쓰면 된다.

```
void main() {
  print(Hello(
    age: 20;
    country: 'Korea',
    name: "Kim"
  ));
}
```
named argument 순서에 상관없이 argument의 이름들만 적어주면 된다.
named argument을 사용하면 함수부분도 수정이 필요하다

```


String Hello({String name ="none" , int age = 0, String country = "none"}) {
  return "Hello $name, you are $age, and you come from $country";
}
void main() {
  print(Hello(
    age: 20,
    country: 'Korea',
    name: "Kim",
  ));
}


```
String Hello(
    {required String name, required int age, required String country}) {
  return "Hello $name, you are $age, and you come from $country";
}

void main() {
  print(Hello(
    age: 20,
    country: 'Korea',
    name: "Kim",
  ));
}
```
required를 사용하면 좋은점은 dart에 입력을 안할시 알려준다
