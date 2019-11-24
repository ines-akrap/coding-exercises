// Create a grades object that stores a set of student grades in an object. Provide a
// function for adding a grade and a function for displaying the student’s grade average

class Grades {
  constructor(student) {
      this.student = student;
      this.grades = [];
  }
  addGrade(grade) {
      this.grades.push(grade);
  }
  getSum() {
      return this.grades.reduce((currentSum, grade) => currentSum + grade);
  }
  getAverage() {
      return this.getSum() / this.grades.length;
  }
}

// TESTS
const Anna = new Grades('Anna');
Anna.addGrade(4);
Anna.addGrade(5);
Anna.addGrade(3);
console.log(Anna.getAverage());
