//getting elements from html
const button = document.getElementById("result")
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const days = document.getElementById("days")
const months = document.getElementById("months")
const years = document.getElementById("years")
const error = document.getElementsByClassName("error")
//function on  click
button.addEventListener("click", function(){
//getting values from the input
let dayValue = dayInput.value;
let monthValue = monthInput.value;
let yearValue = yearInput.value;
const allInputs = [dayInput, monthInput, yearInput]; 
//error
//subtracting moment js to get results
validate()
//validation
if(validate()){
    for (let i = 0; i < allInputs.length; i++){
    allInputs[i].classList.remove("required")
    allInputs[i].nextElementSibling.classList.add("hide")
    allInputs[i].previousElementSibling.classList.remove("error")}

let age = moment().subtract({ days:dayValue, months: monthValue, years: yearValue});
console.log(age.format("D, M , YY"))
//changing dom to display results
years.textContent = age.format("YY");
months.textContent = age.format("M");
days.textContent = age.format("D");
}else{
    for (let i = 0; i < allInputs.length; i++){
        if (!allInputs[i].value.length){
            allInputs[i].classList.add("required")
            allInputs[i].nextElementSibling.classList.remove("hide")
            allInputs[i].previousElementSibling.classList.add("error")
        }
    }
}
//styling invalid input
function validate(){
    let valid = 0
     for (let i = 0; i < allInputs.length; i++){
        if (dayValue > 31){
            dayInput.classList.add("required")
            dayInput.nextElementSibling.classList.remove("hide")
            dayInput.previousElementSibling.classList.add("error")
            valid++
        }
        if (monthValue > 12){
            monthInput.classList.add("required")
            monthInput.nextElementSibling.classList.remove("hide")
            monthInput.previousElementSibling.classList.add("error")
            valid++
        }
        if (yearValue > 2023){
            yearInput.classList.add("required")
            yearInput.nextElementSibling.classList.remove("hide")
            yearInput.previousElementSibling.classList.add("error")
            valid++
        }
    }
    if (valid > 0){
        return false
    } else {return true}
}
})


