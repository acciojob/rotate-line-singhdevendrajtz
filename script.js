//your JS code here. If required.
const my_line=document.querySelector("#line")
let interval=20;
let initial_deg=0;
setInterval(function (){
//console.log(initial_deg)
	initial_deg+=2;
my_line.style.transform=`rotate(${initial_deg}deg)`

},interval);

