(function() {

	"use strict";
	var Script = (function() {

    	var CONSTANTS = 
        {
        	ID_SELECTORS:
        	{
        		"pickDateAndTime": "#datetimepicker"
        	}  
        }  

        return {
        	main: function() {
        		this.demoFn();
        	},
        	demoFn: function() {
    			$(CONSTANTS.ID_SELECTORS.pickDateAndTime).datetimepicker({
                    dayOfWeekStart : 1,
                    lang:'en'
                });
                $(CONSTANTS.ID_SELECTORS.pickDateAndTime).datetimepicker({value:'2015/04/15 05:03',step:10});
        	}
        }
	})();

	Script.main();
})();