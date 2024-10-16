/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library ui5.community.showcaselib
 */
sap.ui.define([
    'sap/ui/core/library' // library dependency
], () => {
    "use strict";

    // delegate further initialization of this library to the Core
    // note the full api reference notation due to the Core not being booted yet!
    return sap.ui.getCore().initLibrary({
        name: "custom.lib",
        version: "0.0.1",
        dependencies: ["sap.ui.core"],
        types: [],
        interfaces: [],
        controls: [
            "custom.lib.Train",
            "custom.lib.Wagon"
        ],
        elements: [],
        noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
    });
});