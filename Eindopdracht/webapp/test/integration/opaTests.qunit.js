/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"be/ap/Eindopdracht/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});