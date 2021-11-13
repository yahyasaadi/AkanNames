const day = document.getElementById('day').value;
const month = document.getElementById('month').value;
const year = document.getElementById('year').value;
const gender = document.getElementsByName('gender').value;
const form = document.getElementById('form');


function generateDay(day, month, year) {
	const offSetTable = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
  if (month < 3){
  	year = year - 1;
  }
  result = (year + year/4 - year/100 + year/400 + offSetTable[month-1] + day) % 7;
  return Math.floor(result);
}



form.addEventListener('submit', function (e) {
    e.preventDefault()
})



