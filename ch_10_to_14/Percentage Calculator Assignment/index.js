let course_1 =parseFloat(prompt("Enter your Course 1 Marks"))
let course_2 =parseFloat(prompt("Enter your Course 2 Marks"))
let course_3 =parseFloat(prompt("Enter your Course 3 Marks"))
let course_4 =parseFloat(prompt("Enter your Course 4 Marks"))
let course_5 =parseFloat(prompt("Enter your Course 5 Marks"))
let totalMarks = 500;
let obtainMarks = course_1+course_2+course_3+course_4+course_5;
let prcntg = obtainMarks*100/totalMarks;
alert("You gain " +prcntg+"%");