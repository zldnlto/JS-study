const getApple = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🍎"), 1000);
  });

const getBanana = (apple) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${apple} => 🍌`), 1000);
  });

const getTrain = (banana) =>
  new Promise((resolve, rejcet) => {
    setTimeout(() => resolve(`${banana} => 🚅`), 1000);
  });

getApple().then(getBanana).then(getTrain).then(console.log);

//2 실전예제

fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => console.log(data));

//1. 추가 then을 사용하여 7개의 항목 productname만 출력해보세요 (console.log)

fetch("http://test.api.weniv.co.kr/mall").then((productData) => data.json());
