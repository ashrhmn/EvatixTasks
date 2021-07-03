const Book = require('./src/Book');
const Person = require('./src/Person');
const Student = require('./src/Student');
const Teacher = require('./src/Teacher');

const student1 = new Student('Ashik', 'Rahman', '25/01/1999', [], []);
const student2 = new Student('Nil', 'Rahman', '13/09/1999', [], []);
const student3 = new Student('Eva', 'Rahman', '25/01/2004', [], []);

// console.log(student1);

const teacher1 = new Teacher('Shohel', 'Rana', '01/01/1980', true, 20000, [])
const teacher2 = new Teacher('Abdul', 'Hannan', '01/01/1980', true, 10000, [])

// console.log(teacher1);

const book1 = new Book('Learn ReactJS', 1001, ['Class Component', 'State Hooks'])
const book2 = new Book('Learn JAVA', 1001, ['Classes', 'Threads'])
const book3 = new Book('Learn VueJS', 1001, ['We have v-model'])

// console.log(book1);

student3.Study(book1, teacher1)
student3.Study(book2, teacher2)
student3.Study(book3, teacher2)

// student3.print()

// teacher2.print()

// console.log(student1);

// console.log(student1.hasStudied('State Hooks'));

// console.log(teacher1.taughtPeople);

// console.log(teacher1 === teacher1.DeepClone());

// console.log(teacher1.DeepClone());


// teacher1.Teach(student2)
// student2.Study(book3, teacher2)

// student2.print()

// console.log(student2);