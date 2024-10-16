sap.ui.define([
    "custom/lib/Train",
    "custom/lib/Wagon"
], (Train, Wagon) => {

    new Train({
        wagons: [new Wagon({label: "101"})]
    }).placeAt("content");

});