$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	
	//And create the needed controllers and views
	var start_view = new startView($("#viewHolder"));
	var side_view = new sideView($("#viewHolder"));
	var select_dish_view = new selectDishView($("#viewHolder"));
	var dish_preview = new dishPreview($("#viewHolder"));
	var last_overview = new lastOverview($("#viewHolder"));
	var full_recipe_view = new fullRecipe($("#viewHolder"));


	var mc = new mainController(model, start_view, side_view, select_dish_view, dish_preview, last_overview, full_recipe_view);
	var start_controller = new startController(mc);
	var side_controller = new sideController(mc, model, side_view);
	var select_controller = new selectController(mc, model, select_dish_view);
	var preview_controller = new previewController(mc, model, dish_preview);
	var lastOverview_controller = new lastOverviewController(mc, model, last_overview);
	var fullRecipe_controller = new fullRecipeController(mc, model, full_recipe_view);

});