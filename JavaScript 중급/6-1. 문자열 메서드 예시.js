//1

let list = ["01.들어가며", "02.js의 역사", "03.자료형", "04.함수", "05.배열"];

//list 배열에서 문자열만 출력
let newList = [];
for (let i = 0; i < list.length; i++) {
  newList.push(list[i].slice(3));
}
console.log(newList); // ['들어가며', 'js의 역사', '자료형', '함수', '배열']

//2 금칙어 '콜라' : indexOf의 함정

function hasCola(str) {
  if (str.indexOf("콜라")) {
    console.log("금칙어가 있습니다");
  } else {
    console.log("통과");
  }
}

hasCola("와 사이다가 짱이야"); // '금칙어가 있습니다' => indexOf("콜라")는 -1 (truthy)
hasCola("콜라"); // '통과' => indexOf("콜라")는 0 (falsy)

// 수정한 함수

function isReallyHasCola(str) {
  if (str.indexOf("콜라") > -1) {
    console.log("금칙어가 있습니다");
  } else {
    console.log("통과");
  }
}

function containsCola(str) {
  if (str.includes("콜라")) {
    console.log("금칙어가 있습니다");
  } else {
    console.log("통과");
  }
}
