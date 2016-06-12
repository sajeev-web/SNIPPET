/*(function() {

	"use strict";
	var Script = (function() {

	var CONSTANTS = 
                {
        	ID_SELECTORS:
        	{
        		
        	}  
        }  

        return {
        	main: function() {
        		this.demoFn();
        	},
        	demoFn: function() {
				console.log("demoFn");
        	}
        }
	})();

	Script.main();
})();*/


var name = "Sajeev";
var age = 33;



var person = {
    name: "Sajeev",
    age: 33
}

var sayHello = function(person) {
  return "Hi " + person.name + " " + person.age
}


var zaphod = {name: 'Zaphod', age: 42};
var marvin = {name: 'Marvin', age: 420000000000};

zaphod.sayHello = function(){
  return "Hi, I'm " + this.name;
}

marvin.sayHello = function(){
  return "Hi, I'm " + this.name;
}

var count = 0;

var Names = function() {

    var count = 0;

    return {
        fullName: function(fname, lname) {
            count++;
            return fname + " " + lname + "---" + count;
        }  
    }

}


var Name = function(fname, lname) {
    var fname = fname;
    var lname = lname;

    return {
        fullName: function() {

            return fname + " " + lname ;
        }
    }
}

var Problem = function(x, y){
  this.x = x;
  this.y = y;        
}

var n = new Name("Sajeev", "Kumar");

var Problem = function(x, y){
  this.x = x;
  this.y = y;        
}

var problem1 = new Problem(4, 5);