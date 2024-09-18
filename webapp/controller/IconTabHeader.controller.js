sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
    "use strict";

    return Controller.extend("sap.ui.demo.nav.controller.IconTabHeader", {

        onInit: function () {
            // You can include any initialization logic here if needed
        },

        onTabSelect: function (oEvent) {
            // Get the selected tab's key
            const sSelectedKey = oEvent.getParameter("key");

            // Get the router instance
            const oRouter = UIComponent.getRouterFor(this);

            // Perform navigation based on the selected key
            switch (sSelectedKey) {
                case "trasse":
                    oRouter.navTo("trasse");
                    break;
                case "bestellprozess":
                    oRouter.navTo("bestellprozess");
                    break;
                case "terminplanung":
                    oRouter.navTo("terminplanung");
                    break;
                case "benutzerverwaltung":
                    oRouter.navTo("benutzerverwaltung");
                    break;
                case "stammdaten":
                    oRouter.navTo("stammdaten");
                    break;
                case "docsEditor":
                    oRouter.navTo("docsEditor");
                    break;
                default:
                    // Handle default case or navigation if needed
                    break;
            }
        }
    });
});
