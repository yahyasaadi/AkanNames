var dayVal = document.getElementById('day');
var monthVal = document.getElementById('month');
var yearVal = document.getElementById('year');
const gender = document.getElementById('gender');
const form = document.getElementById('form');



function generateDay(day, month, year) {
    const offSetTable = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
  if (month < 3){
      year = year - 1;
  }
  result = (year + year/4 - year/100 + year/400 + offSetTable[month-1] + day) % 7;
  return Math.floor(result);
}

function genderCheck(gender, num) {

    if (gender.value === "male" && num === 0) {
        alert("Your day of birth is Sunday and your Akan name is Kwasi");
    } else if (gender.value === "male" && num === 1){
        alert("Your day of birth is Monday and your Akan name is Kwadwo");
    } else if (gender.value === "male" && num === 2){
        alert("Your day of birth is Tuesday and your Akan name is Kwabena");
    } else if (gender.value === "male" && num === 3){
        alert("Your day of birth is Wednesday and your Akan name is Kwaku");
    } else if (gender.value === "male" && num === 4){
        alert("Your day of birth is Thursday and your Akan name is Yaw");
    } else if (gender.value === "male" && num === 5){
        alert("Your day of birth is Friday and your Akan name is Kofi");
    } else if (gender.value === "male" && num === 6){
        alert("Your day of birth is Saturday and your Akan name is Kwame");
    } else if (gender.value === "female" && num === 0){
        alert("Your day of birth is Sunday and your Akan name is Akosua");
    } else if (gender.value === "female" && num === 1){
        alert("Your day of birth is Monday and your Akan name is Adwoa");
    } else if (gender.value === "female" && num === 2){
        alert("Your day of birth is Tuesday and your Akan name is Abenaa");
    } else if (gender.value === "female" && num === 3){
        alert("Your day of birth is Wednesday and your Akan name is Akua");
    } else if (gender.value === "female" && num === 4){
        alert("Your day of birth is Thursday and your Akan name is Yaa");
    } else if (gender.value === "female" && num === 5){
        alert("Your day of birth is Friday and your Akan name is Afua");
    } else {
        alert("Your day of birth is Saturday and your Akan name is Ama");
    }
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    var dayNum = dayVal.value;
    var monthNum = monthVal.value;
    var yearNum = yearVal.value;
        
    
    var trial = generateDay(parseInt(dayNum), parseInt(monthNum), parseInt(yearNum));
    //var trial = generateDay(11, 5, 1992)
    
    //return alert(trial);
    return genderCheck(gender, trial)
})




/*
function genderCheck(gender, num) {
   

    if (gender.value === "male" && num === 0) {
        alert("Your day of birth is Sunday and your Akan name is Kwasi");
    } else if (gender.value === "male" && num === 1){
        alert("Your day of birth is Monday and your Akan name is Kwadwo");
    } else if (gender === "male" && num === 2){
        alert("Your day of birth is Tuesday and your Akan name is Kwabena");
    } else if (gender === "male" && num === 3){
        alert("Your day of birth is Wednesday and your Akan name is Kwaku");
    } else if (gender === "male" && num === 4){
        alert("Your day of birth is Thursday and your Akan name is Yaw");
    } else if (gender === "male" && num === 5){
        alert("Your day of birth is Friday and your Akan name is Kofi");
    } else if (gender === "male" && num === 6){
        alert("Your day of birth is Saturday and your Akan name is Kwame");
    } else if (gender === "female" && num === 0){
        alert("Your day of birth is Sunday and your Akan name is Akosua");
    } else if (gender === "female" && num === 1){
        alert("Your day of birth is Monday and your Akan name is Adwoa");
    } else if (gender === "female" && num === 2){
        alert("Your day of birth is Tuesday and your Akan name is Abenaa");
    } else if (gender === "female" && num === 3){
        alert("Your day of birth is Wednesday and your Akan name is Akua");
    } else if (gender === "female" && num === 4){
        alert("Your day of birth is Thursday and your Akan name is Yaa");
    } else if (gender === "female" && num === 5){
        alert("Your day of birth is Friday and your Akan name is Afua");
    } else {
        alert("Your day of birth is Saturday and your Akan name is Ama");
    }
}
*/




//var gender;
//var num;
/*
function genderCheck(gender, num) {
    
    if (gender==="male" && num===0){
        alert("Okay")
    } else{
        alert("Not okay")
    }
}
*/

