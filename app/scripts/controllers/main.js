'use strict';
/*global angular*/

angular.module('easeldiagramApp').controller('MainCtrl', function ($scope) {
	/*global createjs, Button, Connection*/

	var stage;
	var update = true;
	var btn1, btn2, btn3, cnt1, cnt2, cnt3;

	$scope.init = function () {

		//new stage
		stage = new createjs.Stage(document.getElementById('canvas'));
		createjs.Touch.enable(stage);
		stage.enableMouseOver();

		btn1 = new Button('Hello!', '#F00');
		btn1.x = 200;
		btn1.y = 20;
		btn1.onPress = pressHandler;

		btn2 = new Button('Goodbye.', '#0F0');
		btn2.x = 200;
		btn2.y = btn1.y + 50;
		btn2.onPress = pressHandler;


		btn3 = new Button('Hello again!!', '#0FF');
		btn3.x = 200;
		btn3.y = btn2.y + 50;
		btn3.onPress = pressHandler;


		cnt1 = stage.addChild(new Connection(btn1, btn2, '#000'));
		cnt2 = stage.addChild(new Connection(btn2, btn3, '#000'));
		cnt3 = stage.addChild(new Connection(btn3, btn1, '#000'));

		stage.addChild(btn1,btn2,btn3);
		//draw to the canvas
		update = false;
		stage.update();
		createjs.Ticker.addListener(window);
		createjs.Ticker.addEventListener('tick', tick);
	};

    function pressHandler(e){
        e.onMouseMove = function(ev){
            e.target.x = ev.stageX;
            e.target.y = ev.stageY;
            update = true;
            $scope.$apply();
        };
    }

	function tick(){
		if(update){
			update = false;
			cnt1.drawLine();
			cnt2.drawLine();
			cnt3.drawLine();
			stage.update();
			$scope.$apply();
		}
	}
});
