var selectDishView = function(container){
	this.cnt = container;
	$("#selectDishView").hide();

	this.show = function(){
		this.cnt.append ('<div class="col-xs-8 col-sm-10 col-md-10" id="selectDishView"></div>');
		$("#selectDishView").show();
	}

	this.hide = function(){
		$("#selectDishView").hide();
	}
}