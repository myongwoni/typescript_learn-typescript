interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

let developer: Developer;
let person: Person;

// 타입 호환은 오른쪽에 있는 type이 더 많은 속성을 가지고 있거나 구조적으로 더 클때 호환이 가능
developer = person;
person = developer;
// developer = new Person();
// person = new Developer();



// function
let add = function(a: number, b: number) {
  return a + b;
}

let sum = function(a: number, b: number, c: number) {
  return a + b + c;
}

// 위 interface와는 다르게 오른쪽에 있는 함수가 더 적은 parameter를 가지고 있어야 호환이 가능
add = sum;
sum = add;



// generic
interface Empty<T> {
  // ...
}

interface NotEmpty<T> {
  data: T;
}

let empty1: Empty<number>;
let empty2: Empty<string>;
empty1 = empty2;
empty2 = empty1;

let notempty1: NotEmpty<number>;
let notempty2: NotEmpty<string>;
notempty1 = notempty2;
notempty2 = notempty1;
