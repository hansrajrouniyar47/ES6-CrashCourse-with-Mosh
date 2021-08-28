const colors = ['red', 'blue', 'green'];
const listOfColors1 = colors.map(function(color){
  return '<li>' + color + '</li>';
}
);
console.log(listOfColors1);
//map with generic function

//map with arrow function

const listOfColors2 = colors.map( color => '<li>' + color + '</li>');
console.log(listOfColors2);

//map with arrow functions and bactics character i.e defining template literal for our string where $ is argument placehold and what we put betweeen curly braces will be rendered dynamically at runtime

const listOfColors3 = colors.map( color => `<li>${color}</li>`);
console.log(listOfColors3);
