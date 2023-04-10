//getting elements from html
const button = document.getElementById("result")
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const days = document.getElementById("days")
const months = document.getElementById("months")
const years = document.getElementById("years")
const error = document.getElementsByClassName("error")
const required = document.getElementsByClassName("req")
//function on  click
button.addEventListener("click", function(){
//getting values from the input
let dayValue = dayInput.value;
let monthValue = monthInput.value;
let yearValue = yearInput.value;
const allInputs = [dayInput, monthInput, yearInput]; 
//error
for (let i = 0; i < allInputs.length; i++){
    allInputs[i].classList.remove("required")
    allInputs[i].nextElementSibling.classList.add("hide")
    allInputs[i].previousElementSibling.classList.remove("error")}
//subtracting moment js to get results

//validation
if(!dayValue || !monthValue || !yearValue){
    for (let i = 0; i < allInputs.length; i++){
        if (!allInputs[i].value.length){
            allInputs[i].classList.add("required")
            allInputs[i].nextElementSibling.classList.remove("hide")
            allInputs[i].previousElementSibling.classList.add("error")
        }
    }
}else if(validate()){
  
let age = moment().subtract({ days:dayValue, months: monthValue, years: yearValue});
console.log(age.format("D, M , YY"))
//changing dom to display results
years.textContent = age.format("YY");
months.textContent = age.format("M");
days.textContent = age.format("D");
}
//styling invalid input
function validate() {
    let valid = 0;
    for (let i = 0; i < allInputs.length; i++) {
      const inputValue = allInputs[i].value;
    if (inputValue > 31 && allInputs[i] === dayInput) {
        allInputs[i].classList.add("required");
        allInputs[i].nextElementSibling.classList.remove("hide");
        allInputs[i].previousElementSibling.classList.add("error");
        allInputs[i].nextElementSibling.textContent = "Must be a valid day";
        valid++;
      } else if (inputValue > 12 && allInputs[i] === monthInput) {
        allInputs[i].classList.add("required");
        allInputs[i].nextElementSibling.classList.remove("hide");
        allInputs[i].previousElementSibling.classList.add("error");
        allInputs[i].nextElementSibling.textContent = "Must be valid month";
        valid++;
      } else if (inputValue > 2023 && allInputs[i] === yearInput) {
        allInputs[i].classList.add("required");
        allInputs[i].nextElementSibling.classList.remove("hide");
        allInputs[i].previousElementSibling.classList.add("error");
        allInputs[i].nextElementSibling.textContent = "Must be in the past";
        valid++;
      }
    }
    if (valid > 0) {
      return false;
    } else {
      return true;
    }
  }
  
  
})


