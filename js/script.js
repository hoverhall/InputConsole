var btn1 = document.getElementById("btn1");

var inp1 = document.getElementById("inp1");
var inp2 = document.getElementById("inp2");
var inp3 = document.getElementById("inp3");

btn1.addEventListener("click", function() {
	console.log(inp1.value + " " + 
				inp2.value + " " + 
				inp3.value);
}, false)