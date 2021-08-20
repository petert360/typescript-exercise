// alap interface
interface Named {
  readonly name?: string;
  outputName?: string;
}

// extends miatt megköveteli a Named tulajdonságait is.
interface Greetable extends Named {
  greet(phrase: string): void;
}

// Implmentáljuk a Person osztályba a Greetable interface-t
// a name-et opcionálissá tettük, de a construktorban is azzá kell tenni
// a másik lehetőség, hogy alapértelemzett értéket adok neki.
class Person implements Greetable {
  name?: string;
  age = 30;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  // mivel az oszály engedi a paraméter nélküli hívást opcionálisan
  // itt kell leellenőrizni, hogy van-e érték
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi');
    }
  }
}

// Most már létrehozható így is az user1 objektum
let user1: Greetable;
user1 = new Person();
user1.greet('Hi there, I am');
