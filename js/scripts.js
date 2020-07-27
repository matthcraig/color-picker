var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randoColor = document.getElementById("random");

function gradientPicker(){
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";"
}
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }
function randomColors(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	gradientPicker();
}
gradientPicker();
color1.addEventListener("input", gradientPicker);
color2.addEventListener("input", gradientPicker);
randoColor.addEventListener("click", randomColors);
