function taskA() {
  setTimeout(() => {
    console.log("A 작업 끝");
  }, 2000); //내장 비동기 함수
}

taskA();
console.log("코드 끝");

function taskB(a, b, cb) {
  setTimeout(() => {
    console.log("B 작업 끝");
    const res = a + b;
  }, 3000);
}

function taskC(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000);
}

function taskD(a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000);
}

taskB(4, 5, (b_res) => {
  console.log("B RESULT : ", b_res);
  taskC(b_res, (c_res) => {
    console.log("C RESULT : ", c_res);
    taskD(c_res, (d_res) => {
      console.log("C RESULT :", d_res);
    });
  });
});
console.log("코드 끝");

taskC(7, (res) => {
  console.log("C TASK RESULT : ", res);
});

taskD(2, (res) => {
  console.log("D TASK RESULT : ", res);
});
