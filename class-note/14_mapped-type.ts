// mapped type
let arr = [{ id: 1, title: '함수' }, { id: 2, title: '변수' }, { id: 3, title: '인자' }];
let ret = arr.map(function (item) {
  return item.title;
});
console.log(ret); // ['함수', '변수', '인자'];

// { [P in K] : T }
// { [P in K] ? : T }
// { readonly[P in K] : T }
// { readonly[P in K] ? : T }

type Heros = 'Hulk' | 'Capt' | 'Thor';
type HeroAges = { [K in Heros]: number };
const ages: HeroAges = {
  Hulk: 24,
  Capt: 30,
  Thor: 50,
}

// for in 반복문 코드
let alphabet = ['a', 'b', 'c'];
for (let key in alphabet) {
  console.log(alphabet[key]);
}
