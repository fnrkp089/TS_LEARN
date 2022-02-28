// interface Human { //타입 체크용 인터페이스, 인터베이스는 에러를 막기위해 컴파일 되지 않는다. 
//    name: string, // 타입스크립트 측면에선 interface가 더 보안적
//    age: number,
//    gender: string
// }

// const person = {
//    name: 'Kenneth',
//    age: 22,
//    gender: 'male',
   
// }

class Human { //클래스는 변환된다
   public name: string;
   public age: number;
   public gender: string;
   constructor(name: string, age: number, gender: string){//메소드. 생성될때마다 호출
      this.name = name;
      this.age = age;
      this.gender = gender;
   }
}

const lynn = new Human('Kyle', 18, 'male')


const sayHi = (person: Human): string => {// 인터페이스를 다음과 같이 받을수 있다.
   return `Hello ${person.name} , you are ${person.age} and you are a ${person.gender}`;
}

console.log(sayHi(lynn)); // void: 빈공간. 즉 sayHi의 function들이 어떤 유형값을 돌려주기 위해 나타내주고잇음
export {}