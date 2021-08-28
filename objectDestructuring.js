
const address = {
  street : '',
  city : '',
  country : ''
};

//suppose we want to destructure an object, what we would generally do is this:

const street = address.street;
const city = address.city;
const country = address.country;
console.log(street);
console.log(city);
console.log(country);

//but a better way to destructure is using curly braces

const {street, city, country} = address;
console.log(street);
// also if we want to use any of the property only we can just write that property like 
 const { city } = address;

 //or if we want to use a few property but with a different variable name and this can be done with alias which is denoted by :

 const { city : ct } =address;

 