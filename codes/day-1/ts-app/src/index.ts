class Employee {
    /*
    id: number;
    name: string;
    basicPayment: number;
    daPayment: number;
    hraPayment: number;
    totalsalary: number;

    constructor(id: number, name: string, basicPayment: number, daPayment: number, hraPayment: number) {
        this.id = id
        this.name = name
        this.basicPayment = basicPayment
        this.daPayment = daPayment
        this.hraPayment = hraPayment
        this.totalsalary = 0
    }
    */
    totalsalary: number;
    constructor(public id: number, public name: string, public basicPayment: number, public daPayment: number, public hraPayment: number) {
        this.totalsalary = 0
    }
    calculateSalary(): void {
        this.totalsalary = this.basicPayment + this.daPayment + this.hraPayment
    }
}

class Developer extends Employee {
    constructor(id: number, name: string, basicPayment: number, daPayment: number, hraPayment: number, public incentivePayment: number) {
        super(id, name, basicPayment, daPayment, hraPayment)
    }
    calculateSalary(): void {
        super.calculateSalary()
        this.totalsalary += this.incentivePayment
    }
}
class Hr extends Employee {
    constructor(id: number, name: string, basicPayment: number, daPayment: number, hraPayment: number, public gratuityPayment: number) {
        super(id, name, basicPayment, daPayment, hraPayment)
    }
    calculateSalary(): void {
        super.calculateSalary()
        this.totalsalary += this.gratuityPayment
    }
}

const employees: Employee[] = []
employees.push(new Developer(1, 'anil', 1000, 2000, 3000, 4000))
employees.push(new Hr(2, 'sunil', 1500, 2500, 3500, 4500))

employees.forEach(
    (e) => {
        e.calculateSalary()
        console.log(`Salary of ${e.name} is ${e.totalsalary}`);
    }
)

function filterBySalary(salary: number): Readonly<Employee[]> {
    return employees
        .filter(
            (e) => e.totalsalary > salary
        )
}

filterBySalary(11000)
    .forEach(
        e => console.log(e.name)
    )