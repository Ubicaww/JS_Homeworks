function Student(firstName, lastName, birthYear, grades = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.grades = grades;
  this.attendance = new Array(25);
}

Student.prototype.getAge = function() {
  const currentYear = new Date().getFullYear();
  return currentYear - this.birthYear;
};

Student.prototype.getAverageGrade = function() {
  if (this.grades.length === 0) return 0;

  const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
  return sum / this.grades.length;
};

Student.prototype._changeAttendance = function(status) {
  const emptyIndex = this.attendance.findIndex(item => item === undefined);
  if (emptyIndex !== -1) {
    this.attendance[emptyIndex] = status;
  } else {
    console.log(`У ${this.firstName} ${this.lastName} закінчились клітинки для відміток`);
  }
};

Student.prototype.present = function() {
  this._changeAttendance(true);
};

Student.prototype.absent = function() {
  this._changeAttendance(false);
};

Student.prototype.summary = function() {
  const avgGrade = this.getAverageGrade();
  const totalLessons = this.attendance.filter(status => status !== undefined).length;

  if (totalLessons === 0) return "Студент не з'являвся на заняттях";

  const presentCount = this.attendance.filter(status => status === true).length;
  const avgAttendance = presentCount / totalLessons;

  if (avgGrade > 90 && avgAttendance > 0.9) {
    return "Молодець!";
  } else if (avgGrade > 90 || avgAttendance > 0.9) {
    return "Добре, фле можна краще";
  } else {
    return "Редиска!";
  }
};



const sasha = new Student('Олександр', 'Шевченко', 2005, [95, 98, 92, 100]);
for (let i = 0; i < 10; i++) sasha.present(); 

console.log(`${sasha.firstName} ${sasha.lastName}, Вік: ${sasha.getAge()}, Середній балл: ${sasha.getAverageGrade()}`);
console.log(`Результат Олександра: ${sasha.summary()}`);


const masha = new Student('Марія', 'Сідорова', 2006, [85, 96, 92, 88]);
masha.present();
masha.absent();
masha.absent();

console.log(`${masha.firstName} ${masha.lastName}, Вік: ${masha.getAge()}, Середній балл: ${masha.getAverageGrade()}`);
console.log(`Результат Марії: ${masha.summary()}`);


const ivan = new Student('Іван', 'Іванов', 2004, [50, 60, 45]);
ivan.absent();
ivan.absent();
ivan.present();

console.log(`${ivan.firstName} ${ivan.lastName}, Вік: ${ivan.getAge()}, Середній балл: ${ivan.getAverageGrade()}`);
console.log(`Результат Івана: ${ivan.summary()}`);