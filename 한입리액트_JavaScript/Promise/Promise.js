//콜백지옥에서 우리를 구원하다

function isPositive(number) {
  setTimeout(() => {
    if (typeof number === "number") {
      //성공-> resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      //실패 -> reject
      reject("주어진 값이 숫자형 값이 아닙니다");
    }
  }, 2000);
}

isPositive(
  10,
  (res) => {
    "성공적으로 수행됨 :", res;
  },
  (err) => {
    "실패하였음:", err;
  }
);

function isPositiveP(number) {
  const executor = (resolve, reject) => {
    setTimeout(() => {
      if (typeof number === "number") {
        //성공-> resolve
        console.log(number);
        resolve(number >= 0 ? "양수" : "음수");
      } else {
        //실패 -> reject
        reject("주어진 값이 숫자형 값이 아닙니다");
      }
    }, 2000);
  };
  const asyncTask = new Promise(executor);
  return asyncTask;
}

const res = isPositiveP(101);

res
  .then((res) => {
    console.log("작업 성공 :", res);
  })
  .catch.catch((err) => {
    console.log("작업 실패 :", err);
  });
