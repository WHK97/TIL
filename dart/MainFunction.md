# Dart main 함수
### main()
main함수는 모든 Dart프로그램의 Entry point(시작점)이다.
main함수에서 작성한 코드만 호출이 된다
```
//정상
void main(){
 
}
//오류 main이 없다는 오류가 나온다
void hello(){
  
}
```
Dart에서는 JavaScript처럼 자동으로 ; 인식을 안하기 때문에 항상 ; 붙여줘야한다
```
void main(){
  print("Hello World");
}
//에러
void main(){
  print("Hello World")
}
```




