const getApple = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("๐"), 1000);
  });

const getBanana = (apple) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${apple} => ๐`), 1000);
  });

const getTrain = (banana) =>
  new Promise((resolve, rejcet) => {
    setTimeout(() => resolve(`${banana} => ๐`), 1000);
  });

getApple().then(getBanana).then(getTrain).then(console.log);

//2 ์ค์ ์์ 

fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => console.log(data));

//1. ์ถ๊ฐ then์ ์ฌ์ฉํ์ฌ 7๊ฐ์ ํญ๋ชฉ productname๋ง ์ถ๋ ฅํด๋ณด์ธ์ (console.log)

fetch("http://test.api.weniv.co.kr/mall").then((productData) => data.json());
