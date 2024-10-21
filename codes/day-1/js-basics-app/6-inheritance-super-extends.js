class Person {
    constructor(id, name, salary) {
        this.id = id
        this.name = name
        this.salary = salary
    }
    show() {
        return `Id=${this.id}, Name=${this.name}, Salary=${this.salary}`
    }
}
class Trainer extends Person {
    constructor(id, name, salary, subject) {
        super(id, name, salary)
        this.subject = subject
    }
    show() {
        return `${super.show()}, Subject=${this.subject}`
    }
}

const joydipTrainer = new Trainer(1, 'joydip', 1000, 'JavaScript')
console.log(joydipTrainer.show());