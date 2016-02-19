var lastOverviewController = function(mc){
	this.mainController = mc;

	$(document).on('click', '#back2', function(event) { 
       mc.lastDishBack();
  	 });
	$(document).on('click', '#fullRecipe', function(event) { 
       mc.fullRecipeMain();
  	 });

}