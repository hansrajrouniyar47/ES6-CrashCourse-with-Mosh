const person1 = {
  talk(){
    setTimeout(function(){
        console.log("this: ",this);
    },1000);
  }
};
person1.talk();
// in the above function, this is not referring to the object instantiation rather to the window object which is a global object



//again iff
const person2 = {
  walk(){
    var self = this;
    setTimeout(function(){
        console.log("this: ",self);
    },1000);
  }
};
person2.walk();

// the above method is how it used to be done with generic functions and thus in this way it refers back to the object instantiation



// and now with arrow functions this refers to the current object instantiation not the global object

const person3 = {
  balk(){
    setTimeout(()=>console.log("this:",this),1000);
  }

};
person3.balk();