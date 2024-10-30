// delete 키워드는 배열 요소를 삭제한다.
var Users = [{name: "소녀시대", age: 20}, {name: "걸스데이", age: 22}, {name: "티아라", age: 23}];
console.log("delete 키워드로 배열 요소 삭제 전 배열 요소의 수 : %d", Users.length);

delete Users[1];
console.log("delete 키워드로 배열 요소 삭제 후");
console.dir(Users);

// splice() 메소드로 배열 요소 여러 개를 한꺼번에 추가하거나 삭제하기
Users.splice(1, 0, {name: "애프터스쿨", age:25});
console.log("splice()로 요소를 인덱스 1에 추가한 후");
console.dir(Users);

Users.splice(2, 1);
console.log("splice()로 인덱스 2의 요소를 1개 삭제한 후");
console.dir(Users);