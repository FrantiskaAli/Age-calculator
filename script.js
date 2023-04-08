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
const allInputs = [dayInput, monthInput, yearInput]; 
//error
//if (!dayValue || !monthValue )
//subtracting moment js to get results
for (let i = 0; i < allInputs.length; i++){
    if (!allInputs[i].value.length){
        allInputs[i].classList.remove("required")
       allInputs[i].parentNode.empty()
    }
}

if(dayValue && monthValue && yearValue){

let age = moment().subtract({ days:dayValue, months: monthValue, years: yearValue});
console.log(age.format("D, M , YY"))
//changing dom to display resulte
years.textContent = age.format("YY");
months.textContent = age.format("M");
days.textContent = age.format("D");
}else{
    for (let i = 0; i < allInputs.length; i++){
        if (!allInputs[i].value.length){
            allInputs[i].classList.add("required")
           allInputs[i].parentNode.append("required")
        }
    }
}
//styling invalid input

})


