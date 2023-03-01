function logMessageAny(value: any) {
  console.log(value);
}

logMessageAny('hello');
logMessageAny(10);


var seho: string | number | boolean;
var narae: string & number & boolean;

function logMessageUnion(value: string | number) {
  console.log(value);

  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }

  throw new TypeError('value must be string or number');
}

logMessageUnion('hello');
logMessageUnion(100);

interface Person {
  name: string;
  age: number;
}

interface Engineer {
  name: string;
  skill: string;
}

function askSomeoneUnion(someone: Engineer | Person) {
  someone.name = '홍길동';
  someone.age = 26;
  someone.skill = 'C++';
}

askSomeoneUnion({ name: '사람', age: 100 });
askSomeoneUnion({ name: '개발자', skill: 'system engineer' });

function askSomeoneIntersection(someone: Engineer & Person) {
  someone.name = '홍길동';
  someone.age = 26;
  someone.skill = 'C++';
}

askSomeoneIntersection({ name: '개발자1', skill: 'C#', age: 41 });
askSomeoneIntersection({ name: '개발자2', skill: 'publishing', age: 32});
