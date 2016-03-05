(function() {

	"use strict";
	var Script = (function() {

		var CONSTANTS = 
        {
        	ID_SELECTORS:
        	{
        		"listOfCountries": "#countryList"
        	}  
        }  

        return {
        	main: function() {
        		this.jsFn();
        		this.gtArray();
        		this.useLodash();
        	},
        	jsFn: function() {
        		var $selector = $(CONSTANTS.ID_SELECTORS.listOfCountries).find("li p");
				$selector.each(function(i) {
					console.log(i + "---" + $(this).text());
				});
        	},
        	gtArray: function() {
        		var $selector = $(CONSTANTS.ID_SELECTORS.listOfCountries).find("li p");
        		var listToArray = $selector.map(function() { 
					return $(this).text();
				}).get();
				return listToArray;
        	},
        	useLodash: function() {
        		var arr = this.gtArray();
        		_.each(arr, function(val, k) {
					console.log(val + "--" + k);
				});
        	}
        }
	})();

	Script.main();
})();