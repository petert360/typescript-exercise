var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, n) {
        this.id = id;
        this.n = n;
        this._employees = [];
    }
    Object.defineProperty(Department.prototype, "listEmployees", {
        get: function () {
            return this._employees;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Department.prototype, "addToEmployees", {
        set: function (employee) {
            if (!employee) {
                throw new Error('Please provide a name');
            }
            this.addEmployee(employee);
        },
        enumerable: false,
        configurable: true
    });
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this._employees.push(employee);
    };
    return Department;
}());
// extends segítségével létrehozunk egy új aloszályt
// mivel új constructort hoztunk létre, ezért szükség van a super() hívására.
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    // csak az osztályon belülről érhető el a constructor,
    // onnan kell megoldani a pldányosítást
    function AccountingDepartment(id) {
        return _super.call(this, id, 'ACC dept.') || this;
    }
    // annak ellenére, hogy static metódus, használhatjuk a thist,
    // mert belülről hívjuk, így a saját osztályra mutat, amit kezelni akarunk
    // ellenőrizzük, hogy létezik-e ha nem, akkor létrehozzuk.
    AccountingDepartment.checkInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('ACC#1');
        return this.instance;
    };
    // az alap osztály megköveteli a describe metódust az abstract segítségével
    AccountingDepartment.prototype.describe = function () {
        console.log('Accounting Department - ID: ' + this.id);
    };
    return AccountingDepartment;
}(Department));
// most a static metódusával hozzuk létre az oszályt, ha nem létezik
var accounting = AccountingDepartment.checkInstance();
// ha megpróbálom létrehozni, csak a létezőt kapom vissza
var accounting2 = AccountingDepartment.checkInstance();
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
var employee1 = Department.createEmployee('Joe');
console.log(employee1);
// az abstract describe metódus hívása:
accounting.describe();
