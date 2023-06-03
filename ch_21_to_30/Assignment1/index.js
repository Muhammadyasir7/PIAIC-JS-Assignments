var user_input = prompt("Input a number with decimal point")
var greater_num = Math.ceil(user_input)
alert (greater_num)
var text="This is my dummy text"
var sliceText = text.slice(0,greater_num)
let newString = '';
for (let i = sliceText.length - 1; i >= 0; i--) {
  newString += sliceText[i];
}
alert(newString)
