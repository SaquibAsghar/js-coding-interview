class User {
  constructor(name, age, boy) {
    this.name = name;
    this.age = age;
    this.boy = boy;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getBoy() {
    return this.boy;
  }
}

class Student extends User {
  constructor(name, age, boy, course) {
    super(name, age, boy);
    this.course = course;
  }

  getCourse() {
    return this.course;
  }
}

class Teacher extends User {
  constructor(name, age, boy, course, yoe) {
    super(name, age, boy, course);
    this.yoe = yoe;
  }
}

const Saquib = new Student("Saquib Asghar", 27, 1995, "Btech");
const Senor = new Teacher("Senor Asghar", 37, 1979, "CS", 5);
