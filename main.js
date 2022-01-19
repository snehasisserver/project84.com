canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
// Create a reference for the canvas

img_width = 800;
img_height = 250;

var img_image;
var alphabet_key_img = "Alpkey.png";
var arrow_key_img = "Arrkey.png";
var special_key_img = "spkey.png.png";


img_x = 10;
img_y = 150;

function add() {
	alphabet_key_imgTag = new Image();
	arrow_key_imgTag = new Image();
	special_key_imgTag = new Image();
	
	img_imageTag = new Image();

	
	//defining a variable with a new image
	
	alphabet_key_imgTag = uploadimg;
	arrow_key_imgTag = uploadimg;
	special_key_imgTag.onload = uploadimg;
	
	img_imageTag.onload = uploadimg; // setting a function, onloading this variable

	alphabet_key_imgTag.src = alphabet_key_img;
	arrow_key_imgTag.src = arrow_key_img;
	special_key_imgTag.src = special_key_img;
	
	img_imageTag.src=img_image;  // load image
}

function uploadimg() {

	ctx.drawImage(img_imageTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122) || (keyPressed >=65 && keyPressed<=90)){
			
		aplhabetkey();
		document.getElementById("d1").innerHTML = "You pressed Alphabet Key";
		console.log("alphabet key");
	}
	else if(keyPressed >=48 && keyPressed<=57){
		numberkey();
		document.getElementById("d1").innerHTML = "You pressed Number Key";
		console.log("number key");
	}
	else if(keyPressed >=37 && keyPressed<=40){
		arrowkey();
		document.getElementById("d1").innerHTML = "You pressed Arrow Key";
		console.log("arrow key");
	}
	else if((keyPressed = 17) || (keyPressed = 18) || (keyPressed = 27)){
		specialkey();
		document.getElementById("d1").innerHTML = "You pressed Special Key";
		console.log("special key");
	}
	
}
function aplhabetkey()
{
	img_image = "Alpkey.png";
	add();
	//upload respective image with the message. 

}
function numberkey()
{
	img_image = "numkey.png";
	add();
}
function arrowkey()
{
	img_image = "Arrkey.png";
	add();
}
function specialkey()
{
	img_image = "spkey.png";
	add();
}

	
