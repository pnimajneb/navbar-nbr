sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";

   return Controller.extend("sap.ui.demo.nav.controller.Nbr", {
       onInit: function () {
        // any initialization logic here
       },
       // Event handler for the tab select event
       onTabSelect: function(oEvent) {
            // get the selected key
            var sKey = oEvent.getParameter("key");

            // IDs of the panels that need to be scrolled to
            var aPanels = [
                "PanelTrasse",
                "PanelBestellprozess",
                "PanelTerminplanung",
                "PanelBenutzerverwaltung",
                "PanelStammdaten"
            ];

             // Find the corresponding panel that matches the key dynamically
            var oView = this.getView();
            var oPanel = aPanels.find(function(panelId) {
            return panelId.toLowerCase().includes(sKey.toLowerCase());
            });
        
            if (oPanel) {
                var oPanelControl = oView.byId(oPanel);
                if (oPanelControl) {
                // Scroll the page to the matching panel
                oPanelControl.getDomRef().scrollIntoView({ behavior: "smooth" });
                }
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
            // aTiles is an array of GenericTile controls 
            var aTiles = oPanel.getContent();
            var bAnyTileVisible = false;

            // looping through tiles and filter based on tiles header names
            aTiles.forEach(function(oTile) {
                // retrieving the header text of the current GenericTile (oTile)
                var sTileHeader = oTile.getHeader();
                var bVisible = !sQuery || sTileHeader.toLowerCase().indexOf(sQuery.toLowerCase()) !== -1;
                oTile.setVisible(bVisible);

                if (bVisible) {
                    bAnyTileVisible = true;
                }
            });
            oPanel.setVisible(bAnyTileVisible)
        }.bind(this));

           // applying filter if there is a search query
           if (sQuery) {
               aTiles.forEach(function (oTile) {
                   var sTileHeader = oTile.getHeader();
                   // Filter logic: Check if the tile's header contains the search query
                   var bVisible = sTileHeader.toLowerCase().includes(sQuery.toLowerCase());
                   oTile.setVisible(bVisible);
               });
           }
       },
   });
});
