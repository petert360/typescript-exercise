// alap interface
interface Named {
  readonly name: string;
}

// extends miatt megköveteli a Named tulajdonságait is.
interface Greetable extends Named {
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
