sap.ui.define([
    "sap/ui/core/Control"
], function(Control) {
    "use strict";
    return Control.extend("custom.lib.Wagon", {
        metadata: {
            properties: {
                "label": { type: "string", defaultValue: "123" },
                "selected": { type: "boolean", defaultValue: false }
            },
            events: {   
                "press": {}
            }            
        },
        
        // Add event listener
        onclick: function() {
            var bSelected = this.getProperty("selected");
            this.setProperty("selected", !bSelected);
            this.toggleStyleClass("myWagon--selected");
            this.firePress();
        },

        // Renderer function
        renderer: function(oRm, oControl) {
            oRm.openStart("span", oControl);
			oRm.class("myWagon");
			oRm.openEnd();
            oRm.writeEscaped(oControl.getLabel());
            oRm.close("span");
        }
    });
});