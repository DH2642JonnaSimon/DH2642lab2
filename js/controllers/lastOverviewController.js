var lastOverviewController = function(mc, model, last_overview){
	this.mainController = mc;
	this.dm = model;
	this.lastOverview = last_overview;

	console.log('Inne i den fina lastOverviewControllern');

	$(document).on('click', '#back2', function(event) { 
       mc.lastDishBack();
  	 });
	$(document).on('click', '#fullRecipe', function(event) { 
       mc.fullRecipeMain();
  	 });

}