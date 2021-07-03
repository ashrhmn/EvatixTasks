module.exports = class Person {
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }

    Name() {
        return (this.firstName + ' ' + this.lastName)
    }
}