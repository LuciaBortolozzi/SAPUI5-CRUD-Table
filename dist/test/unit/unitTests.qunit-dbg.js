/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"EMP_CRUD/EMP_CRUD/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});