canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
width_of_greencar=75;
height_of_greencar=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_X=5;
greencar_Y=225;

function add() {
bg_imgtag= new Image();
bg_imgtag.onload=uploadBackground;
bg_imgtag.src=background_image;


greencar_imgtag= new Image();
greencar_imgtag.onload=uploadgreencar;
greencar_imgtag.src=greencar_image;

}

function uploadBackground() {
ctx.drawImage(bg_imgtag,0,0,canvas.width, canvas.height);

}

function uploadgreencar() {
ctx.drawImage(greencar_imgtag,greencar_X,greencar_Y,width_of_greencar,height_of_greencar);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
 if(greencar_Y>=0)
 greencar_Y=greencar_Y-10;
uploadBackground();
uploadgreencar();
}

function down()
{
	if(greencar_Y<=500)
	greencar_Y=greencar_Y+10;
   uploadBackground();
   uploadgreencar();	
}

function left()
{
	if(greencar_X>=0){
		greencar_X=greencar_X-10;
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(greencar_X<=700){
		greencar_X=greencar_X+10;
		uploadBackground();
		uploadgreencar();
	}
}
