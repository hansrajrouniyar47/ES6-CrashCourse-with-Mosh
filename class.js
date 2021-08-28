class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("walks");
  }
}
class Teacher extends Person {
  constructor(name,degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("teaches");
  }
}

const teacher = new Teacher("sam", "Ph.d");
console.log(teacher.name);
teacher.teach();
teacher.walk();