const getName = (person) => {
  //   if (!person) {
  //     return "객체가 아닙니다.";
  //   }
  const name = person && person.name;
  return name || "객체가 아닙니다.";
};

let person = { name: "이정환" };
const name = getName(person);
console.log(name);
