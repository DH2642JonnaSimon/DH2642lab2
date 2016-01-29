var selectDishView = function(container){
	this.cnt = container;
	$("#selectDishView").hide();

	this.show = function(){
		this.cnt.append ('<div class="col-xs-7 col-sm-9 col-md-9" id="selectDishView" style="height:100%;"><div style="height:20%;background-color: rgba(246, 178, 107, 0.7);"><h3 style="margin-left: 10px;margin-right: 20px;border-bottom: solid 1px;">SELECT DISH</h3><form class="form-inline"><div class="form-group" style="margin-left: 10px;"><div class="form-group col-xs-4" style="padding: 0px;"><input id="searchInput" class="form-control" type="text" style="padding: 0px;position:relative;float:right;margin-right: 0px;margin-left: 100px; width: 100%;"></div><div class="form-group col-xs-4" style="padding: 0px;"><button id="searchButton" type="button" class="btn btn-warning btn-responsive" style="paddin: 0px;">Search</button></div><div class="form-group col-xs-4" style="padding: 0px;"><select class="form-control" style="margin-right: 20px; width: 100px;"><option>Starter</option><option>Main</option><option>Dessert</option></select></div></div></div><form><div style="height:80%;"></div></div>');
		$("#selectDishView").show();


	}

	this.hide = function(){
		$("#selectDishView").hide();
	}
}