class Department {
  public name: string;
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

  constructor(id: string, n: string) {
    this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  addEmployee(employee: string) {
    this._employees.push(employee);
  }
}

// extends segítségével létrehozunk egy új aloszályt
// mivel új constructort hoztunk létre, ezért szükség van a super() hívására.
class ITDepartment extends Department {
  constructor(id: string, admins: string[]) {
    super(id, 'IT dept.');
  }
}

// létrehozunk egy osztály példányt
const accounting = new Department('ACC', 'Accounting');

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
