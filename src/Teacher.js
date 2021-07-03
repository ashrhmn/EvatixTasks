const Person = require("./Person")

module.exports = class Teacher extends Person {
    constructor(firstName, lastName, dateOfBirth, canTeach, salary, taughtPeople) {
        super(firstName, lastName, dateOfBirth)
        this.canTeach = canTeach
        this.salary = salary
        this.taughtPeople = taughtPeople
    }

    Teach(person) {
        if (this.canTeach) {
            this.taughtPeople.push(person)
            person.taughtBy.push(this)
            return true
        } else {
            return false
        }
    }

    DeepClone() {
        const clonedTeacher = {...this }
        return clonedTeacher
    }
    print() {
        console.log(`\nTeacher Information`);
        console.log(`Teacher Name : ${this.Name()}`);
        console.log(`Date of Birth : ${this.dateOfBirth}`);
        console.log(`Salary : ${this.salary}`);
        console.log(`Can Teach : ${this.canTeach?'Yes':'No'}`);
        console.log(`Students : `);
        this.taughtPeople.map(people => {
            people.print()
        })
    }
}