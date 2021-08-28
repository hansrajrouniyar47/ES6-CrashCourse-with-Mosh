//spread operator is used to spread entire array or object in simpler way and has high utlitliy when there are numbers of objects/array to be concatenated and can be done with three dots operator i.e ...

//eg on arrays
const first = ['a','b','c'];
const second =  ['d','e','f'];
const res = [...first,'h',...second];

console.log(res);
// ["a", "b", "c", "h", "d", "e", "f"]


//eg on objects
const one = {
  name : 'Hansraj',
  regno : '18BCE2472'
};
const two = {
  college : 'VIT',
};
const final = { ...one,...two,location:'Vellore' };
console.log(final);
// {name: "Hansraj", regno: "18BCE2472", college: "VIT", location: "Vellore"}
// college: "VIT"
// location: "Vellore"
// name: "Hansraj"
// regno: "18BCE2472"

