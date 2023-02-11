let num_1 =parseFloat(prompt("Enter 1st Number"));
let num_2 =parseFloat(prompt("Enter 2nd Number"));
let operator =prompt("Enter operator only(+, - , * , %");
if (operator == "+"){
    alert(num_1 + num_2)
}
else if(operator == "-"){
    alert(num_1-num_2)
}
else if(operator == "*"){
    alert(num_1*num_2)
}
else if(operator == "/"){
    alert(num_1 / num_2)
}
else if(operator == "%"){
    alert(num_1 % num_2)
}else{
    alert("Enter correct operator or num")
}