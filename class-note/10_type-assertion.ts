// 타입 단언(type assertion)
var a;
a = 20;
a = 'a';
var b = a as string;

// DOM API 조작
// <div id="app">hello</div>

let div = document.querySelector('div');
// 위 div가 HTMLDivElement | null 이기 때문에 div가 null이 아닌지 검증이 필요
if (div) {
  div.innerText = 'bye';
}

let  divAssertion = document.querySelector('.container') as HTMLDivElement;
// 위에서 HTMLDivElement로 type assertion을 했기 때문에 null이 아닌지 검증 불필요
divAssertion.innerText = 'GoodNight';
