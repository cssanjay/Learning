/*
	inheritance and prototype chaining
*/
let f = function(){
	this.a = 1;
	this.b = 2;
}

let o = new f();

f.prototype.b = 3;
f.prototype.c = 4;


console.log(o.a);
console.log(o.b);	//2, because of property shadowing
console.log(o.c);
console.log(o.d);



//inheriting methods

var o = {
	a : 2,
	m : function() {
		return this.a +1;
	}
};

console.log(o.m()); //3

var p = Object.create(o);

p.a = 4;
console.log(p.m()); //5


/*
with a constructor:
	A constructor in JS is just a function that is called with a new operator. 
*/

function Graph(){
	this.vertices = [];
	this.edges = [];
}

Graph.prototype = {
	addVertex: function(v){
	this.vertices.push(v);
	}
};

var g = new Graph();

/* with Object.create */
var a = {a:1};
var b = Object.create(a);
console.log(b.a);  //1 (inherited)

var c = Object.create(b);
// c --> b --> a --> Object.prototype --> null

var d = Object.create(null); // d --> null
conosle.log(d.hasOwnProperty);
//undefined, as d doesn't inherit from Object.prototype

/* classes */
'use strict'

class Polygon {
	constructor(height, width){
		this.height = height;
		this.width = width;
	}
}

class Square extends Polygon{
	constructor(sideLength){
		super(sideLength, sideLength);
	}

	get area(){
		return this.length * this.width;
	}

	get sideLength(newLength){
		this.height = newLength;
		this.width = new width;
	}
}

var square = new Square(2);

/*
	hasOwnPrototype is the only thing in JS which deals with
	properties and DOES NOT traverse the prototype chain
*/

