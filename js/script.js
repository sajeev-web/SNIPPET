(function() {

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
})();