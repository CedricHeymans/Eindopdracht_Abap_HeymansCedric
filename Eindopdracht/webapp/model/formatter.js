sap.ui.define([], function () {
	"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		currencyValue : function (sValue) {
			if (!sValue) {
				return "";
			}

			return parseFloat(sValue).toFixed(2);
        },
        
        statusValue : function (sValue) {
            var status = "";
            // switch(sValue) {
            //     case sValue == 1:
            //     status = "Validated";
            //     break;
            //     case sValue == 2:
            //     status = "Rejected";
            //     break;
            //     case sValue == 3:
            //     status = "To be validated";
            //     break;
            //     //Obsolete kan normaal niet
            // } Met switch is "cleaner" maar dit werkt niet?
            if(sValue === 1){
                status = "Validated";
            }
            else if(sValue === 2)
            {
                status = "Rejected";
            }
            else if(sValue === 3)
            {
                status = "To be validated";
            }
            //Status 4 kan normaal niet maar anders dit uit comment
            //else if(sValue === 3)
            //{
            //    status = "Obsolete";
            //}
            else{
                status = "Unknown status";
            }
			return status;
        },
        
        statuscolorValue : function (sValue) {
            var status = "";
            if(sValue === 1){
                status = "Success";
            }
            else if(sValue === 2 || sValue === 4)
            {
                status = "Error";
            }
            else if(sValue === 3)
            {
                status = "Warning";
            }
            else{
                status = "Error"; //Zonder dit werkt het niet?
            }
			return status;
		}
	};
});