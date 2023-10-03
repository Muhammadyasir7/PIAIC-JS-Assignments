var myName = prompt("Enter your name.");
var dobDay = Number(prompt("Enter your DOB(Only Date)."));
var dobMonth = Number(prompt("Enter your DOB(Only Month)."));
var dobYear = Number(prompt("Enter your DOB(Only Year)."));
var date = new Date();

// if(date.getHours() >20 && date.getHours() < 6){
//     console.log("Hello "+myName+", Good Night")
// }
// else if(date.getHours() >=6 && date.getHours() <12){
//     console.log("Hello "+myName+ ", Good Morining")
// }
// else if(date.getHours() >12 && date.getHours() <18){
//     console.log("Hello "+myName+ ", Good Afternoon")
// }
// else if(date.getHours() >18 && date.getHours() <=20){
//     console.log("Hello "+myName+ ", Good Evening")
// }
// else{
//     console.log("Enter wrong")
// }
var dob = dobDay+"/"+dobMonth+"/"+dobYear;
console.log("Your DOB is: "+dob+" "+date);

var currentYear= date.getFullYear() - dobYear;
console.log(currentYear)
