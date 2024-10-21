'use strict'
//2. constructor function syntax
function person(idVal, nameVal, salaryVal) {
    this.id = idVal
    this.name = nameVal
    this.salary = salaryVal
    this.show = function () {
        return 'Id: ' + this.id + ', Name: ' + this.name + ', Salary: ' + this.salary
    }
    //return this
}
//new person(1, 'joydip', 1000)
//new person(2, 'anil', 2000)
console.log(window);

var obj = new person(3, 'sunil', 3000)
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