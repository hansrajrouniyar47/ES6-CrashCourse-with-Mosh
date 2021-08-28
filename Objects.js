const person = {
    name : "Hansraj",
    walk : function(){},
    walk() {}, // From ES6 onwards, we can write function without : & function keyword
    talk() {}

};

//Ways of accessing various data members and methods

person.name = "Ram";
person.talk();

const targetMember = 'name';
person[targetMember.value] = "Shyam";