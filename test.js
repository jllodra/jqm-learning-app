// cream variables de tipus elementals

var n = 10;
var s = "cadena de texte";
var b = true;

// Cream objectes

var o = {
	prop1: n+2,
	prop2: "cadena dins objecte",
	prop3: false
};

var o2 = {
	prop1: 2,
	prop2: o
};

var o3 = {
	prop1: 2,
	"prop 2": 5
}

console.log(o.prop2);
console.log(o["prop2"]);

var p = "prop 2";

console.log(o3[p]);
console.log(o3["prop 2"]);


// Funcions

function suma(a1, a2, a3) {
	var tercer = a3 || 0;
	return a1 + a2 + tercer;
};

var suma2 = function(a1, a2, a3) {
	return suma(a1, a2, a3);
}

var resultat = suma(6, suma2(20, 10));

// Variables globals vs locals y ejemplo de this (call-site)

var variable = 10;

function incrementaVariable(cantidad) {
	var nueva_variable = cantidad;
	this.variable += nueva_variable;
}

var funciones = {
	f1: incrementaVariable,
	variable: 11
};


incrementaVariable(2);
funciones.f1(2);

// Mas this (call-site)

var pos1 = {
	x: 10,
	y: 20
};

var pos2 = {
	x: 11,
	y: 12
};

//

function comparar(n, m) {
	return m > n;
}

var r1 = comparar(pos1.x, pos1.y);
var r2 = comparar(pos2.x, pos2.y);

console.log(r1);
console.log(r2);

//

function comparar2() {
	return this.y > this.x;
}

pos1.validaNumeros = comparar2;
pos2.validaNumeros = comparar2;

var r1 = pos1.validaNumeros();
var r2 = pos2.validaNumeros();

console.log(r1);
console.log(r2);

//

comparar2.apply(pos1);
comparar2.apply(pos2);

comparar2.bind(pos1);
comparar2();

//

function f(g) {
	g();
}

f(function() {
	console.log("g");
	console.log(this);
}.bind(pos1));

//



