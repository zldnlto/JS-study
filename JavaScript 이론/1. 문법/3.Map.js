let menu = new Map();

menu.set("밀감", 11900);
menu.set("휴지", 16900);
menu.set("소고기", 10990);
menu.set("햇반쿡반", 6450);
menu.set("쌀", 36900);
menu.set("단감", 1190);

menu.size; // 6

//순회하기 - for of
for (let item of menu) {
  console.log(`menu이름을 순회하고 있습니다 ${item[0]}`);
  console.log(`menu가격을 순회하고 있습니다 ${item[1]}`);
}

//값 접근
menu.keys();
menu.values();
menu.entries();

//맵핑하기
let temp = new Map([
  [1, 10],
  [2, 20],
  [3, 30],
  [4, 40],
]);
