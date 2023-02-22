var courses = []
var course1 = prompt("Type your first course name","")
var course2 = prompt("Type your second course name","")
var course3 = prompt("Type your third course name","")
var course4 = prompt("Type your fourth course name","")
var course5 = prompt("Type your fifth course name","")
courses.push(course1,course2,course3,course4,course5)
alert(courses)
var course1Value=prompt("Do You Want to edit your course",course1)
var course2Value=prompt(course2,course2)
var course3Value=prompt(course3,course3)
var course4Value=prompt(course4,course4)
var course5Value=prompt(course5,course5)

courses.splice(0, 1, course1Value);
courses.splice(1, 1, course2Value);
courses.splice(2, 1, course3Value);
courses.splice(3, 1, course4Value);
courses.splice(4, 1, course5Value);
alert(courses)