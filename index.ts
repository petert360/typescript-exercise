class Department {
  public name: string;
  private _employees: string[] = [];

  // static tulajdonság létrehozása
  static actualYear = 2021;

  get listEmployees() {
    return this._employees;
  }

  set addToEmployees(employee: string) {
    if (!employee) {
      throw new Error('Please provide a name');
    }
    this.addEmployee(employee);
  }

  constructor(n: string) {
    this.name = n;
    console.log('static tulajdonság: ', Department.actualYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  addEmployee(employee: string) {
    this._employees.push(employee);
  }
}

// létrehozunk egy osztály példányt
const accounting = new Department('Accounting');

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

// static metódus hívása és static tulajdonság kiírása
const employee1 = Department.createEmployee('Joe');
console.log(employee1, Department.actualYear);