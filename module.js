import { Teacher } from "./modules/teacher";

const teacher = new Teacher("Ram", "Ph.d");
console.log(teacher.name);
teacher.teach();
teacher.walk();