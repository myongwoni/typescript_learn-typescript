interface Person {
  name: string;
  age: number;
}

interface Developer {
  name: string;
  skill: string;
}

function introduce(): Person | Developer {
  return {
    name: 'Bill',
    age: 30,
    skill: 'Wood Cutter',
  };
}

let bill = introduce();
console.log(bill.skill);

// 아래와 같이 타입단언을 이용할 수 있지만 가독성이 안좋아지므로 사용을 자제한다
if ((bill as Developer).skill) {
  let skill = (bill as Developer).skill;
  console.log(skill);
} else if ((bill as Person).age) {
  let age = (bill as Person).age;
  console.log(age);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(bill)) {
  console.log(bill.skill);
} else {
  console.log(bill.age);
}
