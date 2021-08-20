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

// type segítségével így hozhatunk létre függvényeket:
type AddFn = (a: number, b: number) => number;
let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

// interface segítségével is létrehozhatunk függvényeket
// nevet nem adunk, anonym fv-t hozunk létre
interface IAddFn {
  (a: number, b: number): number;
}
let addI: IAddFn;
addI = (n1: number, n2: number) => {
  return n1 + n2;
};
