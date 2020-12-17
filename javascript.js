// christmas counter
today = new Date();
var xmas = new Date(today.getFullYear(), 11, 25);

if (today.getMonth() == 11 && today.getDate() > 25) {
    xmas.setFullYear(xmas.getFullYear()+1); 
}  

var one_day=1000*60*60*24;

document.getElementById("time").innerHTML = Math.ceil((xmas.getTime()-today.getTime())/(one_day)) + 
    " days until christmas!";