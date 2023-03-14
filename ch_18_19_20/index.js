<<<<<<< HEAD
// var courses =[];
// var course1= prompt(course1,"Type your course here");
// var course2= prompt(course2,"Type your course here");
// var course3= prompt(course3,"Type your course here");
// var course4= prompt(course4,"Type your course here");
// var course5= prompt(course5,"Type your course here");

// courses.push(course1,course2,course3,course4,course5);
// alert(courses);

// var course1_edit= prompt(course1);
// var course2_edit= prompt(course2);
// var course3_edit= prompt(course3);
// var course4_edit= prompt(course4);
// var course5_edit= prompt(course5);

// courses.splice(0,5, course1_edit,course2_edit,course3_edit,course4_edit,course5_edit);
// alert(courses)
=======
var courses = [];
for (var i = 1; i <= 5; i++) {
  courses.push(prompt("Enter course " + i + " name:"));
}
alert(courses);
for (var i = 0; i < courses.length; i++) {
  courses.splice(
    i,
    1,
    prompt("Enter course " + (i + 1) + " name:", courses[i])
  );
}
alert(courses);
>>>>>>> 0a60d214ab0f8d06dfb0fedb8546bea515710713
