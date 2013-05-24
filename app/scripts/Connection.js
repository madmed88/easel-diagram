/*global createjs*/

(function() {
    'use strict';

    var Connection = function(button1, button2, color) {
        this.initialize(button1, button2, color);
    };

    var c = Connection.prototype = new createjs.Container(); // inherit from Container

    c.Container_initialize = c.initialize;
    c.initialize = function(button1, button2, color) {
        this.Container_initialize();
        this.button1 = button1;
        this.button2 = button2;
        this.color = color;
        this.line = new createjs.Shape();
        this.drawLine();
        this.addChild(this.line);
    };

    c.drawLine = function() {
        this.line.graphics.clear().beginStroke(this.color)
            .moveTo(this.button1.x, this.button1.y)
            /*.bezierCurveTo(this.button1.x-100, this.button1.y-100,
                this.button2.x+100,
                this.button2.y+100,
                this.button2.x, this.button2.y)*/
            .lineTo(this.button2.x, this.button2.y)
            .endStroke();
    };

    window.Connection = Connection;
}());