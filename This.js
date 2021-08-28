const person = {
  name : "Ram",
  walk() {
    console.log(this);
  }
};

person.walk(); // 
//walk(); // walk is called outside of object i.e standalone object
//it is called as global object for window object
// and but here walk has scope limited within person object therefore it says undefined or uncaught reference

//Know the fact that functions in Javascript are objects therefore you can apply method over them like apply, bind and so on. E.g if you are using 