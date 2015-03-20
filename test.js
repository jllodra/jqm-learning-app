"use strict";

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
	//this.variable += nueva_variable;
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
//comparar2();

//

function f(g) {
	g();
}

f(function() {
	console.log("g");
	console.log(this);
}.bind(pos1));

//

// closure

console.group("closure and scoping");

var a = "global";

function h2(f2) {
	console.log(a);
	f2();
}

function f2() {

	var a = "closure";

	function g2(a) {
		a = a;
		console.log(a);
	}

	g2(3);

	h2(g2);

}

f2();

console.groupEnd();

// modul

console.group("modul basic");

var testModule = (function () {
  var counter = 0;
  return {
  	getCounter: function() {
  		return counter;
  	},
    incrementCounter: function () {
      return counter++;
    },
    resetCounter: function () {
      console.log( "counter value prior to reset: " + counter );
      counter = 0;
    }
  };
})();
 
// Usage:
// Increment our counter
testModule.incrementCounter();
// Check the counter value and reset
// Outputs: counter value prior to reset: 1
console.log(testModule.getCounter());
testModule.resetCounter();
console.log(testModule.getCounter());

console.groupEnd();

console.group("modul factory");

var Comptador = (function() {

  var instancies = 0;

  return function(step) {

  	var counter = 0;
  	instancies++;
  
  	return {
	  	getCounter: function() {
	  		return counter;
	  	},
	    incrementCounter: function() {
	    	counter = counter + step;
	      	return counter;
	    },
	    resetCounter: function() {
	      	console.log( "counter value prior to reset: " + counter );
	      	counter = 0;
	    },
	    getNombreComptadors: function() {
	    	return instancies;
	    }
	}
  };
})();

var contador1 = Comptador(1);
var contador2 = Comptador(8);
contador1.incrementCounter();
contador1.incrementCounter();
contador1.incrementCounter();
contador2.incrementCounter();
console.log(contador1.getCounter());
console.log(contador2.getCounter());
console.log(contador1.getNombreComptadors());

console.groupEnd();

console.group("Mixin");

var base = {
  prop1: 0,
  prop2: { weight: 52, price: 100 },
  update: function() {
  	throw "Has d'implementar";
  }
};
var extensio = {
  update: function() {
	console.log("Ja ho he implementat");
  },
  prop4: 100
};
 
// Merge object2 into object1
var object = $.extend({}, base, extensio);

object.update();

console.log(object);

console.groupEnd();