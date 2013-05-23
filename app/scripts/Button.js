(function() {

    var Button = function(label, color) {
      this.initialize(label, color);
    }
    var p = Button.prototype = new createjs.Container(); // inherit from Container

    p.label;
    p.background;

    p.Container_initialize = p.initialize;
    p.initialize = function(label, color) {
        this.Container_initialize();
        
        this.label = label;
        if (!color) { color = "#CCC"; }
        
        var text = new createjs.Text(label, "20px Arial", "#000");
        text.textBaseline = "center";
        text.textAlign = "center";
        
        var width = text.getMeasuredWidth()+30;
        var height = text.getMeasuredHeight()+20;
        
        this.background = new createjs.Shape();
        this.background.graphics.beginFill(color).drawRoundRect(0,0,width,height,10);
        this.background.regX = width/2;
        this.background.regY = height/2;

        

        
        this.addChild(this.background,text);
    }

    p.onPress = pressHandler;

    function pressHandler(e){
        e.onMouseMove = function(ev){
            e.target.x = ev.stageX;
            e.target.y = ev.stageY;
            update = true;
        }
    }

    window.Button = Button;
}());