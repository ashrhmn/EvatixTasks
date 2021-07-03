const Person = require("./Person");

module.exports = class Student extends Person {
    constructor(firstName, lastName, dateOfBirth, studiedBooks, taughtBy) {
        super(firstName, lastName, dateOfBirth)
        this.studiedBooks = studiedBooks
        this.taughtBy = taughtBy
    }
    Study(book, teacher) {
        if (teacher.canTeach) {
            let max = 0;
            this.studiedBooks.length > max ? max = this.studiedBooks.length : max = max
            this.taughtBy.length > max ? max = this.taughtBy.length : max = max
            this.studiedBooks[max] = book
            this.taughtBy[max] = teacher
            teacher.taughtPeople.push(this)
            return true
        } else {
            return false
        }
    }

    hasStudied(topicName) {
        let studied = false
        this.studiedBooks.map(book => {
            if (book.topics.indexOf(topicName) != -1) {
                studied = true
            }
        })
        return studied
    }

    print() {
        console.log(`\nStudent Information`);
        console.log(`Student Name : ${this.Name()}`);
        console.log(`Date Of Birth : ${this.dateOfBirth}`);
        this.studiedBooks.map((book, index) => {
            console.log(`Book '${book.name}' was taught by ${this.taughtBy[index].Name()}`);
        })
    }
}