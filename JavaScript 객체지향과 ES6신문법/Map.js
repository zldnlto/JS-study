//Map 문제

let 회사게시판 = ["이호준", "이호준", "이호준", "김은하", "김은하", "이준근"];

let companySet = new Set(회사게시판);
//문제 1: 몇 명이 게시판에 게시물을 썼나요?
console.log(companySet.size);

//문제 2: 각각 몇 개의 게시물을 작성하였나요?

const counts = 회사게시판.reduce((acc, current) => {
  if (acc[current]) {
    acc[current] += 1;
  } else {
    acc[current] = 1;
  }
  return acc;
}, {});

console.log(counts);
// solution 1.

for (const i of set) {
  console.log(i, 회사게시판.filter((e) => e === i).length);
}

// solution 2.

let map = new Map();
for (const i of 회사게시판) {
  map.set(i, (map.get(i) || 0) + 1); //순회 돌면서 해당 key값 업데이트
}
