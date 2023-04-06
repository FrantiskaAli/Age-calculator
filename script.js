//getting elements from html
const button = document.getElementById("result")
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const days = document.getElementById("days")
const months = document.getElementById("months")
const years = document.getElementById("years")

//function on  click
button.addEventListener("click", function(){
//getting values from the input
const dayValue = dayInput.value;
const monthValue = monthInput.value;
const yearValue = yearInput.value;
//subtracting moment js to get results
let age = moment().subtract({ days:dayValue, months: monthValue, years: yearValue})
console.log(age.format("D, M , YY"))
//changing dom to display resulte
years.textContent = age.format("YY");
months.textContent = age.format("M");
days.textContent = age.format("D");

})

