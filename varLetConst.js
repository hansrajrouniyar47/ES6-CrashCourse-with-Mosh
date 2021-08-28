//var keyword, var-> has scope outside of block as well but within functions
//let keyword, let->has scope only within the blocks it is specified to
//const keyword, value cannot be modified thereafter



function sayHello(){
  for(var i=0;i<5;i++){
    console.log(i);
  }
  console.log(i);
}
//will give 0,1,2,3,4,5




function sayHello(){
  for(let i=0;i<5;i++){
    console.log(i);
  }
  console.log(i); //i can't be accessed out of the block it belongs to
}



const a=5;
a=6; // this will give error as variable with const keyword can't be modified.