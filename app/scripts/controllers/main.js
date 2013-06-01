'use strict';
/*global angular*/

angular.module('easeldiagramApp').controller('MainCtrl', function ($scope) {
	/*global createjs, Button, Connection*/

	var stage;
	var update = true;
	var buttons = []
	var connections = []

	function pressHandler(e){
        e.onMouseMove = function(ev){
            e.target.x = ev.stageX;
            e.target.y = ev.stageY;
            update = true;
            $scope.$apply();
        };
    }

	function tick() {
		if(update){
			update = false;
			connections.forEach(function(entry) {
			    entry.drawLine();
			});
			stage.update();
			$scope.$apply();
		}
	}

	function draw() {
		stage.clear();
		stage.addChild.apply(stage, connections);
		stage.addChild.apply(stage, buttons);
		update = false;
		stage.update();
	}

	$scope.init = function () {

		//new stage
		stage = new createjs.Stage(document.getElementById('canvas'));
		stage.enableMouseOver();

		createjs.Touch.enable(stage);
		createjs.Ticker.addEventListener('tick', tick);

		var btn1 = new Button('Hello!', '#F00');
		btn1.x = 200;
		btn1.y = 20;
		btn1.onPress = pressHandler;
		buttons.push(btn1);


		var btn2 = new Button('Goodbye.', '#0F0');
		btn2.x = 200;
		btn2.y = btn1.y + 50;
		btn2.onPress = pressHandler;
		buttons.push(btn2);


		var btn3 = new Button('Hello again!!', '#0FF');
		btn3.x = 200;
		btn3.y = btn2.y + 50;
		btn3.onPress = pressHandler;
		buttons.push(btn3);


		connections.push(new Connection(btn1, btn2, '#000'));
		connections.push(new Connection(btn2, btn3, '#000'));
		connections.push(new Connection(btn3, btn1, '#000'));

		draw();
		
	};

	$scope.addButton = function () {
		alert("hello");
		var btn = new Button('Hello 2!', '#F00');
		btn.x = 200;
		btn.y = 30;
		btn.onPress = pressHandler;
		buttons.push(btn);
		draw();
	};
});
