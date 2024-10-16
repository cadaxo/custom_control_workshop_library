sap.ui.define([
    "sap/ui/core/Control"
], (Control) => {
    "use strict";

    const Train = Control.extend(
        "custom.lib.Train", {

        metadata: {
            library: "custom.lib",
            aggregations : {
                "wagons": { type: "custom.lib.Wagon", multiple: true }
			}        
        },

        // Renderer function
        renderer(oRM, oControl) {
            oRM.openStart("div", oControl);
			oRM.openEnd();

            // Render the aggregation 'wagons'
            var aWagons = oControl.getWagons();
            aWagons.forEach(function(oWagon) {
                oRM.renderControl(oWagon);
            });

            oRM.close("div");
        }
    }

    );
    return Train;
});