//toString : 진수 변경 가능
let num = 10;
num.toString(2); // 1010 (2진수);

//소수점 자릿수 다루기 - Math.ceil 올림 , floor 내림, round 반올림
// 통계나 지표작업을 할 때 많이 쓰인다.

let userRate = 30.1234;

Math.round(userRate * 100); // 3012
Math.round(userRate * 100) / 100; // 30.12

// toFixed() : 숫자를 인수로 받아 해당 소수점 자리수만큼 반환한다
userRate.toFixed(2); //30.12
userRate.toFixed(0); //30 정수부
userRate.toFixed(6); //30.123400

// ParseInt와 Number
// 차이점 - ParseInt는 문자가 혼용되어 있어도 동작한다.
let margin = "10px";
parseInt(margin); //10
Number(margin); // NaN

//읽을 수 있는 데까지 읽고 문자 만나면 숫자를 반환하는 식으로 동작한다.
let redColor = "f3";
parseInt(redColor); //NaN 문자로 시작하는 경우 반환할 수 있는 숫자가 없다.

// 인수를 입력하면 진수 변경 가능
parseInt("11", 2); //3

parseFloat(); // 부동소수점 반환
let padding = "18.5%";
parseInt(padding); //18
parseFloat(padding); //18.5

//isNan()
let x = Number("x"); //NaN
x == NaN; //false
x === NaN; //false
NaN == NaN; //false -> 암기사항! 자기부정

//Math 함수
Math.random(); //0과 1사이의 숫자를 랜덤으로 출력한다

//1과 100사이 정수 랜덤으로 출력하기 예시
Math.floor(Math.random() * 100) + 1;
//만약 5개중 하나 랜덤으로 뽑는다면 *100 대신 *5 해주면 됨

Math.max(); //최대값
Math.min(); //최소값. 스프레드와 함께 많이 쓰임

let arr = [1, 12, 45, 312, 0, 5, 34];
Math.max(...arr);
Math.min(...arr);

Math.abs(); //절댓값
Math.pow(n, m); //n의 m제곱
Math.sqrt(16); //제곱근
