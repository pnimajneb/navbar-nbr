sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/json/JSONModel",
	"sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("sap.ui.demo.nav.controller.GenericTile", {
        onInit: function () {
            
            this.getView().setModel(new sap.ui.model.json.JSONModel("/Tiles.json"), "tile")
        },

        onFilterTiles: function(oEvent) {
            // build filter array
            const aFilter = [];
            const sQuery = oEvent.getParameter("newValue");
            if (sQuery) {
                aFilter.push(new Filter("TileName", FilterOperator.Contains, sQuery));
            }
            console.log(aFilter)
            
            // filter binding
            const oList = this.byId("tileList");
            const oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        },
    });
});
