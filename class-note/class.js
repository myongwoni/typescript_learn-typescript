function Person(name, age) {
  this.name = name;
  this.age = age;
}

let myWife = new Person('유리', 31);
console.log(myWife);

class Person {
  constructor(name, age) {
    console.log('생성 되었습니다');
    this.name = name;
    this.age = age;
  }
}

let mySon = new Person('동률', 10);
console.log(mySon);


// prototype
let user = { name: '사용자', age: 100 };
let admin = {};

admin.__proto__ = user;

console.log(admin.name);
console.log(admin.age);
console.log(admin);

admin.role = 'admin';
console.log(admin);


// 'Built-in Javascript' or 'Javascript Native API'
let objectAPI = { a: 10 };
console.log(Object.keys(objectAPI));
console.log(objectAPI.hasOwnProperty('a'));
// chrome에서 objectAPI 찍어보기

let arrayAPI = [];
// chrome에서 arrayAPI 찍어보기


