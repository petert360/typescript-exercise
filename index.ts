// bármely objektum, amelyet Greetable-kéntk kell kezelni,
// olyan objektumnak kell lennie, amelynek van egy name talajdonsága
// és egy greet() metódusa

interface Greetable {
  name: string;

  greet(phrase: string): void;
}

// Implmentáljuk a Person osztályba a Greetable interface-t

class Person implements Greetable {
  name: string;
  age = 30;
  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

// Most már létrehozható így is az user1 objektum
let user1: Greetable;
user1 = new Person('Peter');
user1.greet('Hi there, I am');

// Vagy így is:
const user2: Greetable = new Person('Max');
console.log(user1, user2);

// ugyanakkor az osztállyal történő típusadás is működik:
let user3: Person;
user3 = new Person('Someone')
console.log(user3);