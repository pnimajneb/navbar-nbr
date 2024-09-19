sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/ui/core/Fragment",
   "sap/ui/model/Filter",
   "sap/ui/model/FilterOperator"
], function (Controller, Fragment, Filter, FilterOperator) {
   "use strict";

   return Controller.extend("sap.ui.demo.nav.controller.Nbr", {
       onInit: function () {
           // any initialization logic here
       },

       onTabSelect: function (oEvent) {
         var sKey = oEvent.getParameter("key");
         var oPanel = this.getView().byId("Panel" + sKey.charAt(0).toUpperCase() + sKey.slice(1)); // Convert key to Panel ID

         if (oPanel) {
             var oPage = this.getView().byId("page"); // Assuming your Page control has the ID 'page'
             oPage.scrollTo(oPanel.getId()); // Scroll to the Panel
         }
     },

       onFilterTiles: function(oEvent) {
    // get search query
    const sQuery = oEvent.getParameter("newValue");

    // IDs that need to be filtered
    const aPanelIds = [
        "PanelTrasse",
        "PanelBestellprozess",
        "PanelTerminplanung",
        "PanelBenutzerverwaltung",
        "PanelStammdaten"
    ];

    // looping through each panel and applying the filter
    aPanelIds.forEach(function(panelId) {
        var oPanel = this.getView().byId(panelId);
        var aTiles = oPanel.getContent();

        // Loop through tiles and filter based on header text
        aTiles.forEach(function(oTile) {
            var sTileHeader = oTile.getHeader();
            var bVisible = !sQuery || sTileHeader.toLowerCase().indexOf(sQuery.toLowerCase()) !== -1;
            oTile.setVisible(bVisible);
        });
    }.bind(this));



           // Apply the filter if there is a search query
           if (sQuery) {
               aTiles.forEach(function (oTile) {
                   var sTileHeader = oTile.getHeader();
                   // Filter logic: Check if the tile's header contains the search query
                   var bVisible = sTileHeader.toLowerCase().includes(sQuery.toLowerCase());
                   oTile.setVisible(bVisible);
               });
           }
       },

       pressTile: function (oEvent) {
           // Implement what happens when a tile is pressed
           var oTile = oEvent.getSource();
           var sTileHeader = oTile.getHeader();
           console.log("Tile pressed: " + sTileHeader);
           // You can navigate or perform other actions based on the tile
       }
   });
});
