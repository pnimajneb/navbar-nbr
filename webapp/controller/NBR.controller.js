sap.ui.define([
    "sap/ui/core/mvc/Controller"
 ], function (Controller) {
    "use strict";
 
    return Controller.extend("sap.ui.demo.nav.controller.Nbr", {
      pressTile: function(oEvent) {
         console.log('tile pressed', oEvent);
      },
      onTabSelect: function(oEvent) {
         var oPanel = sap.ui.getCore().byId('container-nav---nbr--PanelTrasse');
         console.log('Panel selected', oPanel);
         //oPanel.$().get(0).scrollIntoView({behavior: 'smooth'});
         var sSearch = oPanel.getHeaderText();
         var jqTiles = $('.sapMGT');
         jqTiles.each(function(i, jqTile) {
            var oTile = sap.ui.getCore().byId(jqTile.id);
            if (! oTile.getHeader().includes(sSearch)) {
               oTile.setVisible(false);
            }
         }) ;
      }
    });
 
 });