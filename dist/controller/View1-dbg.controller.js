sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("EMP_CRUD.EMP_CRUD.controller.View1", {
		onInit: function () {},
		/**
		 *@memberOf EMP_CRUD.EMP_CRUD.controller.View1
		 */
		onSave: function (oEvent) {
			var sUrl = "/ED1-Master/ACN_Analytics/Finance/CustomReporting/11602672/srv_emp_crud/srv.xsodata/";
			var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
			this.getView().byId("table0").setModel(oModel);
			var EMPLOYEE_ID = this.getView().byId("input0").getValue();
			var EMP_NAME = this.getView().byId("input1").getValue();
			var COMMENT = this.getView().byId("input2").getValue();
			if (EMPLOYEE_ID !== "" && EMP_NAME !== "") {
				// Push this entry into array
				var oEntry = {
					EMPLOYEE_ID: EMPLOYEE_ID,
					EMP_NAME: EMP_NAME,
					COMMENT: COMMENT
				};
				var sPath = "/EMP";
				oModel.setUseBatch(true);
				oModel.create(sPath, oEntry, {
					method: "POST",
					success: jQuery.proxy(this._onSuccess, this),
					error: jQuery.proxy(this._readODataOnError, this)
				});
			}
		},
		/**
		 *@memberOf EMP_CRUD.EMP_CRUD.controller.View1
		 */
		onDelete: function (oEvent) {
			var sUrl = "/ED1-Master/ACN_Analytics/Finance/CustomReporting/11602672/srv_emp_crud/srv.xsodata/";
			var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
			this.getView().byId("table0").setModel(oModel);
			var EMPLOYEE_ID = this.getView().byId("input0").getValue();
			if (EMPLOYEE_ID !== "") {
				// Push this entry into array
				var sPath = "/EMP" + "('" + EMPLOYEE_ID + "')";
				oModel.setUseBatch(true);
				oModel.remove(sPath, {
					method: "DELETE",
					success: jQuery.proxy(this._onSuccess, this),
					error: jQuery.proxy(this._readODataOnError, this)
				});
			}
			oModel.refresh();
		},
		/**
		 *@memberOf EMP_CRUD.EMP_CRUD.controller.View1
		 */
		onUpdate: function (oEvent) {
			var sUrl = "/ED1-Master/ACN_Analytics/Finance/CustomReporting/11602672/srv_emp_crud/srv.xsodata/";
			var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
			this.getView().byId("table0").setModel(oModel);
			var EMPLOYEE_ID = this.getView().byId("input0").getValue();
			var EMP_NAME = this.getView().byId("input1").getValue();
			var COMMENT = this.getView().byId("input2").getValue();
			if (EMPLOYEE_ID !== "") {
				// Push this entry into array
				var oEntry = {
					EMPLOYEE_ID: EMPLOYEE_ID,
					EMP_NAME: EMP_NAME,
					COMMENT: COMMENT
				};
				var sPath = "/EMP" + "('" + EMPLOYEE_ID + "')";
				oModel.setUseBatch(true);
				oModel.update(sPath, oEntry, {
					method: "PUT",
					success: jQuery.proxy(this._onSuccess, this),
					error: jQuery.proxy(this._readODataOnError, this)
				});
			}
			oModel.refresh();
		},
		_onSuccess: function (data) {
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.alert("Success");
		},
		_readODataOnError: function (data) {
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.alert("Error");
		}
	});
});