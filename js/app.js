$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	
	//And create the needed controllers and views
	var start_view = new startView($("#viewHolder"));
	var side_view = new sideView($("#viewHolder"));
	var select_dish_view = new selectDishView($("#viewHolder"));

	var mc = new mainController(model, start_view, side_view, select_dish_view);
	var start_controller = new startController(mc);
	var side_controller = new sideController(mc, model);
	var select_controller = new selectController(model, select_dish_view);

});