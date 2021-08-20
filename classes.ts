abstract class Department {
  private _employees: string[] = [];

  get listEmployees() {
    return this._employees;
  }

  set addToEmployees(employee: string) {
    if (!employee) {
      throw new Error('Please provide a name');
    }
    this.addEmployee(employee);
  }

  // létrehozunk egy abstract metódust, emiatt az egész osztály abstract lesz
  // innentől kezdve már nem lehet közvetlenül példányosítani, csak az alosztályokat
  abstract describe(): void;

  constructor(protected readonly id: string, public n: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  addEmployee(employee: string) {
    this._employees.push(employee);
  }
}

// extends segítségével létrehozunk egy új aloszályt
// mivel új constructort hoztunk létre, ezért szükség van a super() hívására.
class AccountingDepartment extends Department {
  // ez a tulajdonság az osztály típust tartalmazhatja csak
  private static instance: AccountingDepartment;

  // csak az osztályon belülről érhető el a constructor,
  // onnan kell megoldani a pldányosítást
  private constructor(id: string) {
    super(id, 'ACC dept.');
  }

  // annak ellenére, hogy static metódus, használhatjuk a thist,
  // mert belülről hívjuk, így a saját osztályra mutat, amit kezelni akarunk
  // ellenőrizzük, hogy létezik-e ha nem, akkor létrehozzuk.
  static checkInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('ACC#1');
    return this.instance;
  }

  // az alap osztály megköveteli a describe metódust az abstract segítségével
  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }
}

// most a static metódusával hozzuk létre az oszályt, ha nem létezik
const accounting = AccountingDepartment.checkInstance();

// ha megpróbálom létrehozni, csak a létezőt kapom vissza
const accounting2 = AccountingDepartment.checkInstance();
console.log(accounting, accounting2);

// most a publikus addEmployee metódussal adunk egy elemet a tömbhöz:
accounting.addEmployee('Jane');

// a getter metódust mint tulajdonságot érjük el
console.log('Setter előtt: ', accounting.listEmployees);

// a setter segítségével is beállítunk egy tömb elemet
accounting.addToEmployees = 'Jack';

// setter után:
console.log('Setter után: ', accounting.listEmployees);

// ha üres stringet adunk át, ami falsy, akkor hibaüzenetet kapunk
// accounting.addToEmployees = ''

// static metódus hívása
const employee1 = Department.createEmployee('Joe');
console.log(employee1);

// az abstract describe metódus hívása:
accounting.describe();
