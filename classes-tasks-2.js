console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
  class Player {
    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }

    getAge() {
      return `${this.name} is age ${this.age}`
    }

    getHeight() {
      return `${this.name} is ${this.height}cm`
    }

    getWeight() {
      return `${this.name} weighs ${this.weight}kg`
    }
  }

  const players = [
    new Player('Jonas', 18, 180, 80),
    new Player('Agnė', 20, 170, 63),
    new Player('Stano', 45, 180, 90)
  ];

  players.forEach(player => {
    console.log(player.getAge());
    console.log(player.getHeight());
    console.log(player.getWeight());
  });
}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
  class Calculator {
    add(param1, param2) {
      return param1 + param2;
    }
    subtract(param1, param2) {
      return param1 - param2;
    }
    multiply(param1, param2) {
      return param1 * param2;
    }
    divide(param1, param2) {
      return param1 / param2;
    }
  }

  const arg1 = 10;
  const arg2 = 5;

  const calc = new Calculator();
  console.log(calc.add(arg1, arg2));
  console.log(calc.subtract(arg1, arg2));
  console.log(calc.multiply(arg1, arg2));
  console.log(calc.divide(arg1, arg2));

}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
  class Employee {
    constructor(firstname, lastname) {
      this.firstname = firstname[0].toUpperCase() + firstname.slice(1).toLowerCase();
      this.lastname = lastname[0].toUpperCase() + lastname.slice(1).toLowerCase();
    }

    get fullname() {
      return `${this.firstname} ${this.lastname}`;
    }

    get email() {
      return `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`;
    }
  }

  const emp1 = new Employee("joHn", "Smith");
  console.log(emp1.fullname)

  const emp2 = new Employee("Mary", "Sue");
  emp2.lastname = "Changed";
  console.log(emp2);
  console.log(emp2.email);

  const emp3 = new Employee("Antony", "Walker");
  console.log(emp3.firstname);
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    compareAge(other) {
      if (this.age === other.age) {
        return `${other.name} is the same age as me.`
      } else if (this.age > other.age) {
        return `${other.name} is younger than me.`
      } else {
        return `${other.name} is older than me.`
      }
    }
  }

  const p1 = new Person("Samuel", 24);
  const p2 = new Person("Joel", 36);
  const p3 = new Person("Lily", 24);

  console.log(p1.compareAge(p2));
  console.log(p2.compareAge(p1));
  console.log(p1.compareAge(p3));
}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
  class Rectangle {
    constructor(sideA,sideB){
      this.sideA = sideA;
      this.sideB = sideB;
    }
    getArea(){return this.sideA*this.sideB};
    getPerimeter(){return (this.sideA + this.sideB) *2 };
  }
  
  
  class Circle {
    constructor(r) {
      this.radius = r
    }
    getArea() { return (Math.PI * (this.radius ** 2)) }
    getPerimeter() { return 2 * (Math.PI * this.radius) }
  }
  
  let q = new Circle(4.44);
  console.log(q.getArea());
  console.log(q.getPerimeter());
 
}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  class Name {
	constructor (firstname, lastname){
    this.fname = firstname[0].toUpperCase() + firstname.slice(1).toLowerCase();
    this.lname = lastname[0].toUpperCase() + lastname.slice(1).toLowerCase();
  }

  get fullname() {
    return `${this.fname} ${this.lname}`;
  }

  get initials (){
    return `${this.fname.charAt(0).toUpperCase()}.${this.lname.charAt(0).toUpperCase()}`;

  }
  }

  const name1 = new Name ("John", "Smith")
  console.log(name1.fullname);

  const name2 = new Name ("John", "Smith")
  console.log (name2.initials)
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  class IceCream {
    constructor(flavor, numSprinkles) {
      this.flavor = flavor
      this.numSprinkles = numSprinkles
    }
  }

  function sweetestIcecream(arr) {
    const allFlavors = {
      "Plain" : 0,
      "Vanilla" :	5,
      "ChocolateChip" :	5,
      "Strawberry"	: 10,
      "Chocolate" :	10
    };
    const sweetestFlavor = arr.map(a => allFlavors[this.flavor] + [this.numSprinkles]);
    console.log(arr)
    return  Math.max(...sweetestFlavor);
  }

  
}

console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  class OneThreesNines {
    constructor (number){
      this.number = number
    }
    get ones(){
      return Math.floor(this.number/1);
    }
    get threes(){
      return Math.floor(this.number/3);
    }
    get nines(){
      return Math.floor(this.number/9);
    }
  }
  const firstClass = new OneThreesNines (45);
  console.log(firstClass.ones);
  console.log(firstClass.threes);
  console.log(firstClass.nines);
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  class User{
   static countInstance = 0;
    constructor(){
      this.username= username,
        User.countInstance++;
    }
}
const username = {
  "johnsmith10" : 1,
  "marysue1989" :	2,
  "milan_rodrick" :	3,
};

const user1 = new User("johnsmith10",1);
const user2 = new User("marysue1989",2);
const user3 = new User("milan_rodrick",3);

console.log(User.countInstance);

}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
    getTitle() {
      return "Title: " + this.title;
    }
    getAuthor() {
      return "Author: " + this.author;
    }
  }
  
  const PP = new Book("Pride and Prejudice", "Jane Austen");
  const H = new Book("Hamlet", "William Shakespeare");
  const WP = new Book("War and Peace", "Leo Tolstoy");

  console.log(PP.title,"-",PP.author);
  console.log(H.title,"-",H.author);
  console.log(WP.title,"-",WP.author);
}

console.groupEnd();






