class Person {
  private name: string;
  public age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    console.log('생성 되었습니다');
    this.name = name;
    this.age = age;
  }
}

// react 예전 문법 - 클래스 기반 코드
class App extends React.Component {

}

// 리액크 최신 문법 - 훅 기반의 함수형 코드
function App() {
  return <div>Hello world!</div>
}
