//1. object-literal syntax
var obj = {
    //value properties
    id: 1,
    name: 'joydip',
    salary: 1000,
    //functional property
    show: function () {
        return 'Id: ' + this.id + ', Name: ' + this.name + ', Salary: ' + this.salary
    }
}

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