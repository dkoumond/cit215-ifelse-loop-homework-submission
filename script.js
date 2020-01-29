var wrapperEle = document.body.querySelector(".wrapper");
var buttonEle = document.body.querySelector(".clicker");

function calculate(message1,message2,mpg){
  var milesPerYear = Number(prompt("What is your estimate number of mile per year?"));
  var currentGasCost = Number(prompt("What is the current cost of gasoline in your area?"));
  var totalCost = (milesPerYear / mpg)*currentGasCost;
  wrapperEle.innerHTML = message1+mpg+" for "+milesPerYear+" miles at $"+currentGasCost+message2+totalCost;
}
buttonEle.addEventListener("click", function(){
  calculate("To drive a car with an MPG rating of "," per gallon would cost $",12);
  calculate("To drive a car with an MPG rating of "," per gallon would cost $",17);
  calculate("To drive a car with an MPG rating of "," per gallon would cost $",26);
  calculate("To drive a car with an MPG rating of "," per gallon would cost $",29);
})