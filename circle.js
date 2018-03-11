//Naotaka Kinoshita, Tiffany Moi
//Team Tifftaka
//SoftDev2 pd7
//K11 -- All That Bouncin'
//2018-03-11
var pic = document.getElementById("vimage");
var btn = document.getElementById("clear");
var ids = [];

var newClear = function() {
    var i = 0;
    for (i = 0; i < ids.length; i ++){
        clearInterval(ids[i]);
    }
    while (pic.firstChild) {
        pic.removeChild(pic.firstChild);
    }
};

var draw = function(e) {
    var x = Math.random() * pic.getAttribute("width");
    var y = Math.random() * pic.getAttribute("height");
    var circle = drawCircle(x, y, 2, 3);
};




var drawCircle = function(x, y, dx, dy) {
    //instantiate obj
    var cl = document.createElementNS(
	"http://www.w3.org/2000/svg",
	"circle"
    );
    
    //accessors
    cl.getFill = function() {
	return this.getAttribute("fill");
    };
    cl.getR = function() {
	return this.getAttribute("r");
    };
    cl.getPos = function() {
	var p = {"x" : this.getAttribute("cx"), "y" : this.getAttribute("cy")};
	return p;
    };
    cl.getStroke = function() {
	return this.getAttribute("stroke");
    };
    
    
    //mutators
    cl.setFill = function(c) {
	this.setAttribute("fill", c);
    };
    cl.setR = function(r) {
	this.setAttribute("r", r);
    };
    cl.setPos = function(x, y) {
        this.setAttribute("cx", x);
        this.setAttribute("cy", y);
    };
    cl.setStroke = function(c) {
	this.setAttribute("stroke", c);
    };
    
    //display fxn
    cl.display = function() {
	pic.appendChild(this);
    };
    cl.bounce = function(e) {
        var x = parseInt(cl.getPos()['x']);
        var y = parseInt(cl.getPos()['y']);
        if (x <= 0 || x >= pic.getAttribute("width")){
            
            dx = -1 * dx;
        }
        if (y <= 0 || y >= pic.getAttribute("height")){
            dy = -1 * dy;
        }
        
        cl.setPos(x + dx, y + dy);
        cl.display();
    };
    
    //set attributes
    cl.setPos(x, y);
    cl.setR(20);
    cl.setFill("red");
    cl.setStroke("black");
    var id = setInterval(cl.bounce, 30);
    ids.push(id);
    
    return cl;
};

pic.addEventListener("click", draw);
btn.addEventListener("click", newClear);
