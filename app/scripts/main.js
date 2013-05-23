/*global createjs, Button, Connection*/
/*exported init, tick */
'use strict';

var stage;
var update = true;
var btn1, btn2, btn3, cnt1, cnt2, cnt3;

function init(){

	//new stage
	stage = new createjs.Stage(document.getElementById('canvas'));
	stage.enableMouseOver();

	btn1 = new Button('Hello!', '#F00');
	btn1.x = 20;
	btn1.y = 20;

	btn2 = new Button('Goodbye.', '#0F0');
	btn2.x = 20;
	btn2.y = btn1.y + 50;

	btn3 = new Button('Hello again!!', '#0FF');
	btn3.y = btn2.y + 50;

	btn1.x = btn2.x = btn3.x = 20;

	cnt1 = stage.addChild(new Connection(btn1, btn2, '#000'));
	cnt2 = stage.addChild(new Connection(btn2, btn3, '#000'));
	cnt3 = stage.addChild(new Connection(btn3, btn1, '#000'));

	stage.addChild(btn1,btn2,btn3);
	//draw to the canvas
	update = false;
	stage.update();
	createjs.Ticker.addListener(window);
}

function tick(){
	if(update){
		update = false;
		cnt1.drawLine();
		cnt2.drawLine();
		cnt3.drawLine();
		stage.update();
	}
}