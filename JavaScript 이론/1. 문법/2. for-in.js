// Object에도 사용할 수 있는 반복문

for (const key in object) {
  //실행할 코드 블록
  console.log(person[key]);
}

let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];
let perseon = { fname: "John", lname: "Doe", age: 25 };
//fname, lname, age가 key변수에 할당

for (const brand in brands) {
  console.log(brand); //배열 인덱스 번호
}

//for of - Array, Map, String등 이터러블 객체에서 사용 가능한 반복문

for (const element of iterable) {
  //실행할 코드 블록
}

for (const brand of brands) {
  console.log(brand);
}

let language = "JavaScript";
for (const x of language){
    console.log(x);
}

