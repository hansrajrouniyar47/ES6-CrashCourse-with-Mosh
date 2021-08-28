// if we have single parameter in our function we can exclude parenthesis and if we have zero parameter we need to add empty parenthesis

// if we have only single statement inside curly braces we can get rid of return keyword and curly braces e.g

//generic function
const square1 = function(number) {
  return number * number;
}

//function with single parameter and single statement 
const square2 = number => number * number;
console.log(square1(5));
console.log(square2(6));

const jobs = [
  {id : 1, isActive : true},
  {id : 2, isActive : true},
  {id : 3, isActive : false}
];

const activeJobs1 = jobs.filter(function(job) {
  return job.isActive;
});
const activeJobs2 = jobs.filter( job => job.isActive);
console.log(activeJobs1);
console.log(activeJobs2);