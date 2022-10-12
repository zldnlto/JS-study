// '', "", ``
// 큰 따옴표("")와 작은따옴표('')의 경우 상황에 맞춰서 사용하면 된다. 줄바꿈 시 \n 이스케이프 문자 이용
let html = '<div class="title">제목</div> '; // 예를 들면 작은 따옴표의 경우 html코드에 쓰는 것이 좋다.
// `(벡틱)의 경우 ${}를 이용해 변수나 표현식을 사용할 수 있으며, 줄바꿈이 가능하다.

let greeting = "Hi, nice to meet you.";
greeting.length; //문자열의 길이. 21
greeting[14]; //'e' 인덱스를 이용해 특정 위치 접근은 가능하지만 값 변경은 안됨
greeting[14] = "hehe"; // 적용x

//indexOf() : 문자열을 인수로 받아 몇 번째 오는지 알려줌
greeting.indexOf("e"); //7 포함 문자 여러개여도 첫 번째 위치만 출력
greeting.indexOf("Hi"); //0 첫 번째 글자의 위치

if (greeting.indexOf("Hi")) {
  console.log("Hi가 포함된 문장입니다");
}

//console.log의 내용이 찍히지 않는다. 왜냐하면 indexOf는 문자가 등장하는 첫번째 위치만 반환하므로 H의 인덱스인 0값을 가지는데, 0은 falsy한 값이므로 false

if (greeting.indexOf("Hi") > -1) {
  console.log("Hi가 포함된 문장입니다");
}
//의도대로 작동하도록 함수 안의 if문을 수정한 것 (-1보다 크다는 조건식 추가)

//slice : 원본 배열 손상 없이 객체의 일부분을 가져옴
slice(n, m); // n부터 m-1까지
var desc = "abcdefg";
desc.slice(2); // "cdefg" 2부터 끝까지
desc.slice(0, 5); // "abcde" 0부터 4까지
desc.slice(2, -2); // "cde" 2부터 뒤에서 2번째 전까지

//substring(n, m) : n과 m사이 문자열 반환 (n과 m의 순서가 바뀌어도 동작한다.)
desc.substring(2, 5); // "cde"
desc.substring(5, 2); // "cde"

//substr(n, m) : n부터 시작해 m개를 가져옴
desc.substr(1, 2); // "bc"

//trim() : 문자열의 앞뒤 공백 제거. 사용자로부터 입력받을때 자주 쓰인다.

var blank = "   사용자가 이렇게 입력했네요... ";
blank.trim(); // '사용자가 이렇게 입력했네요...' -> 중간의 띄어쓰기는 살아있음 앞뒤 공백만 제거

//repeat(n) : 문자열 n번 반복하기
blank.repeat(2); //'   사용자가 이렇게 입력했네요...    사용자가 이렇게 입력했네요... '

//codePointAt() , fromCodePoint() : 해당 문자의 유니코드 번호 출력
"a".codePointAt(); //97
"A".codePointAt(); //32
"!".codePointAt(); //33
//숫자 외울필요 없고 대문자가 소문자보다 크다는 정도만 인지
String.fromCodePoint(97); //'a'

let userList = [
  { name: "Mike", age: 30 },
  { name: "Jane", age: 27 },
  { name: "Tom", age: 10 },
];

userList.find((user) => user["age"] <= 19);
