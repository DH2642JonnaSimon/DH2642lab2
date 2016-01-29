var mainController = function(model,startView, sideView, selectDishView){
	this.dinner_model = model;
	this.start_view = startView;
	this.side_view = sideView;
	this.select_dish_view = selectDishView;


	this.newDinner = function(){
		this.start_view.hide();
		this.side_view.show();
		this.select_dish_view.show();
		$("#jumbotron").css("background-color", "rgba(0,0,0,0.7)");
	}
}