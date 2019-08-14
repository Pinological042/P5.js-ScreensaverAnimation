
function setup(){
  	createCanvas(1280, 720);
  	background(0,10,30);

}
function draw(){

	noStroke();
	fill(random(0,255),random(0,255),random(0,255));
	circle(mouseX,mouseY,random(0,random(10,40)));
	//circle(random(0,1280),random(0,720),random(0,random(10,40)));

	//circle(random(mouseX,mouseX + 50),random(mouseY,mouseY + 50),random(0,random(10,40)));



}
