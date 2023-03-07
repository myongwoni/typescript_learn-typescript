// 타입 추론 기본 1
let a = 'abc';

function getB(b = 10) {
  let c = 'hi';
  return b + c;
}

10 + '10';  // '1010'


// 타입 추론 기본 2
interface Dropdown<T> {
  value: T;
  title: string;
}

let shoppingItem: Dropdown<string> = {
  value: 'abc',
  title: 'hello',
}

// 타입 추론 기본 3
interface Dropdown3<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<K> extends Dropdown3<K> {
  description: string;
  tag: K;
}

let detailedItem: DetailedDropdown<string> = {
  value: 'abc',
  title: 'hello',
  description: 'uesd',
  tag: 'bb',
}

// Best Common Type
let arr = [1, 3, true, 'a'];

// Contextual Typing
window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.button);
  console.log(mouseEvent.kangaroo);
}

window.onscroll = function(uiEvent) {
  console.log(uiEvent.button);
}

const handler = function(uiEvent) {
  console.log(uiEvent.button);
}

// typescript language server
