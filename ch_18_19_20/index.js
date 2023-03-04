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