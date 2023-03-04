function logText(text) {
  console.log(text);
  return text;
}

logText(10);
logText('하이');
logText(true);

// 제네릭 기본
function logTextGeneric<T>(text: T): T {
  console.log(text);
  return text;
}

logTextGeneric<string>('10');
logTextGeneric(10);


// 함수 중복선언
function logString(text: string): string {
  console.log(text);
  return text;
}

function logNumber(num: number): number {
  console.log(num);
  return num;
}

logString('a');
logNumber(10);
let num = logNumber(10);


// 유니온 타입 사용
function logUnion(text: string | number): string | number {
  console.log(text);
  return text;
}

let a = logUnion('a');
a.split('');
logUnion(10);


// 제네릭 장점
function logGeneric<T>(text: T): T {
  console.log(text);
  return text;
}

let ret = logGeneric<string>('hello')
ret.split('');
let login = logGeneric<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown {
  value: string;
  selected: boolean;
}

let obj: Dropdown = { value: 'abc', selected: false};

interface DropdownGeneric<T> {
  value: T;
  selected: boolean;
}

let objGeneric: DropdownGeneric<number> = { value: 10, selected: true };

// 제네릭의 타입 제한
function logTextLength<T> (text: T[]): T[] {
  console.log(text.length);
  text.forEach((item) => {
    console.log(item);
  });
  return text;
}

logTextLength<string>(['hi', 'hello']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength2(10);
logTextLength2({ length: 10 });

// 제네릭의 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption(10);
getShoppingItemOption<string>('a');

function getShoppingItemOptionKeyof<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// getShoppingItemOptionKeyof(10);
// getShoppingItemOptionKeyof<string>('a');
getShoppingItemOptionKeyof('name');
