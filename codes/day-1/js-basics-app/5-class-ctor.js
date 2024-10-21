'use strict'
//3. using class and constructor keywords
class Person {
    #_id;
    #_name;
    #_salary;

    constructor(idVal, nameVal, salaryVal) {
        this.#_id = idVal
        this.#_name = nameVal
        this.#_salary = salaryVal
    }
    get id() {
        return this.#_id
    }
    set id(value) {
        this.#_id = value
    }
    set name(value) {
        this.#_name = value
    }
    get name() {
        return this.#_name
    }
    set salary(value) {
        this.#_salary = value
    }
    get salary() {
        return this.#_salary
    }
    show() {
        return 'Id: ' + this.#_id + ', Name: ' + this.#_name + ', Salary: ' + this.#_salary
    }
}

var obj = new Person(3, 'sunil', 3000)
obj.location = 'Bangalore'
obj.sayHello = function () {
    return 'Hello ' + this.name
}

//access properties
console.log(obj.name)
console.log(obj['salary']);
console.log(obj.show());
console.log(obj.location);
console.log(obj.sayHello());

console.log(obj);
console.log('\nthrough for...in loop\n');
for (let propName in obj) {
    let propValue = obj[propName]
    console.log(propName + ':' + propValue);
}