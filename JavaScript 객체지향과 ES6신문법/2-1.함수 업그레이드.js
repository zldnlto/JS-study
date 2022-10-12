// 1. default parameter
//자바스크립트는 파라미터 2개를 넣어야 하는 함수에 1개를 써도 에러가 안 남

function 더하기(a, b = 10) {
  console.log(a + b);
}
더하기(1); //11

function 이것도되네(a, b = 2 * a) {
  console.log(a + b);
}

function 임시함수() {
  return 10;
}
function 함수도가능(a, b = 임시함수()) {
  console.log(a + b);
}
함수도가능(2); // 12

//2. arguments
//모든 파라미터를 한꺼번에 싸잡아서 다루고 싶은 경우 arguments 사용한다
function 함수(a, b, c) {
  console.log(arguments);
  console.log(arguments[0]); //1
  console.log(arguments[1]); //2
  console.log(arguments[2]); //3
}
함수(1, 2, 3);

//argument : 모든 파라미터를 []안에 넣은 변수

function 함수(a, b, c) {
  for (let i = 0; i < arguments.length; i++) {
    console.log(argumentes[i]);
  }
}
