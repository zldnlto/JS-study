//case 1
function sumTest(num1, num2, callback) {
  let result = num1 + num2;
  callback(result);
}

sumTest(10, 20, function (result) {
  console.log(result);
});

//case 2
function sum(num1, num2, callback) {
  return new Promise((resolve, reject) => {
    resolve(num1 + num2);
  });
}
sum(10, 20).then((result) => console.log(result));

function sum_2(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num1 == null || num2 == null)
      reject(new Error("num1 또는 num2 null값"));
    else resolve(num1 + num2);
  });
}

sum_2(10, 20)
  //sum(nul,20)
  .then((result) => console.log("성공::: 결과는?" + result))
  .catch((error) => console.log("실패 :::" + error));
