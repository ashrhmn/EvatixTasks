const Book = require('./src/Book');
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

student3.Study(book2, teacher2)


test('students should be able to add book and teacher', () => {
    expect(new Student('Ash', 'R').Name()).toBe('Ash R')
})


student1.Study(book1, teacher1)
test('student should return true for stuied topics', () => {
    expect(student1.hasStudied('State Hooks')).toBeTruthy()
})


student3.Study(book3, teacher2)
test('student should return false for not stuied topics', () => {
    expect(student3.hasStudied('State Hooks')).toBeFalsy()
})


test('DeepClone should return same value', () => {
    expect(teacher1.DeepClone()).toEqual(teacher1)
})

test('DeepCloned objects should not have same memory references', () => {
    expect(teacher1.DeepClone()).not.toBe(teacher1)
})


teacher1.Teach(student2)
test('After student is taught a topic by a teacher, student should have that information', () => {
    expect(student2.taughtBy).toContainEqual(teacher1)
})