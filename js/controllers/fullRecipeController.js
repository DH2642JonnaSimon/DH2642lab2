var fullRecipeController = function(mc, model, full_recipe_view){
	this.mainController = mc;
	this.dm = model;
	this.fullRecipeview = full_recipe_view;

	$(document).on('click', '#back3', function(event) { 
       mc.goToEditDinner();
  	 });
}