function initModel() {
	var sUrl = "/ED1-Master/ACN_Analytics/Finance/CustomReporting/11602672/srv_emp_crud/srv.xsodata/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}