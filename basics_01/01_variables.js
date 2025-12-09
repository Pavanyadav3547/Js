const CollegeId = 12345;
let CollegeEmail = "test@gmail.com";
var CollegeEmailpassword = "Test@123";
CollegeLocation = "New York";
let CollegeCity; // Declaration without initialization
// CollegeId = 54321;  // This will give error because CollegeId is a constant variable
CollegeEmail = "hello@gmail.com";
CollegeEmailpassword = "Hello@123";
CollegeLocation = "Los Angeles";


console.log("College Email:", CollegeEmail);
console.table([ CollegeId, CollegeEmail, CollegeEmailpassword, CollegeLocation, CollegeCity ]);