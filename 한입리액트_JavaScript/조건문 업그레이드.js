function isKoreanFood(food) {
  if (food === "불고기" || food === "비빔밥" || food === "떡볶이") {
    return true;
  }
  return false;
}

const food1 = isKoreanFood("불고기");
const food2 = isKoreanFood("파스타");
console.log(food1); //true
console.log(food2); //false;

// 🌠 업그레이드

function isKoreanFoodUpgraded(food) {
  if (["불고기", "떡볶이", "비빔밥"].includes(food)) {
    return true;
  }
  return false;
}

//한식인지 양식인지 중식인지 받고 대표메뉴를 리턴해주는 함수

// const getMeal = (mealType) => {
//   if (mealType === "한식") return "불고기";
//   if (mealType === "양식") return "파스타";
//   if (mealType === "중식") return "멘보샤";
//   return "굶기";
// };

// console.log("한식");
// console.log("중식");
// console.log(getMeal());

//객체 이용해서 리팩토링
const meal = {
  한식: "불고기",
  중식: "멘보샤",
  일식: "초밥",
  양식: "스테이크",
  인도식: "카레",
};

const getMeal = (mealType) => {
  return meat[mealType] || "굶기";
};

console.log(getMeal("한식"));
console.log(getMeal());
