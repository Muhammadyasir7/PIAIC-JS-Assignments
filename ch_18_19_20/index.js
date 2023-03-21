var courses = [];
for (i= 0; i < 5; i++) {
  courses.push(prompt("Enter course name"));
}
alert(courses);

var coursesEdit = [];
for (i= 0; i < 5; i++) {
  coursesEdit.push(prompt(courses[i]));
}
for(i=0;i<5;i++){
  courses.splice(0,5, coursesEdit)
}
alert(courses)
