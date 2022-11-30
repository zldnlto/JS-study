let [one, two, three, four = "four"] = ["one", "two", "three"];

console.log(one, two, three);

//swap

let a = 10;
let b = 20;
[a, b] = [b, a];

//object
let object = { 완: "one", 투: "two", 쓰리: "three", name: "이정환" };

// let { 완, 투, 쓰리 } = object;

let { name: myName, 완, 투, 쓰리, abc = "four" } = object;

//name이라는 키값을 기준으로 value를 myName이라는 변수에 할당함
//순서 상관 x, 키 값 기준으로 할당 / abc="four" 기본값 할당
