enum Shoes {
  Nike,
  Adidas,
}

enum ShoesBrand {
  Nike ='나이키',
  Adidas = '아디다스',
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 0

let myShoesBrand = Shoes.Nike;
console.log(myShoes); // '나이키'

// 예제
enum Answer {
  Yes = 'true',
  No = 'false',
}

function askQuestion(answer: Answer): void {
  if (answer === Answer.Yes) {
    console.log('정답입니다');
  }
  if (answer === Answer.No) {
    console.log('오답입니다');
  }
}

askQuestion(Answer.Yes);
askQuestion('Yes');
// askQuestion('예스');
// askQuestion('y');
