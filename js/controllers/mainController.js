var mainController = function(model,startView, sideView, selectDishView, dishPreview, lastOverview, fullRecipe){
	this.dinner_model = model;
	this.start_view = startView;
	this.side_view = sideView;
	this.select_dish_view = selectDishView;
	this.dish_preview = dishPreview;
	this.last_overview = lastOverview;
	this.full_recipe_view = fullRecipe;


	this.newDinner = function(){
		this.start_view.hide();
		this.side_view.show();
		this.select_dish_view.show();
		$("#jumbotron").css("background-color", "#C0C0C0;");
	}
	
	this.previewDish = function(){
	   this.select_dish_view.hide();
	   this.dish_preview.updateFunction();
	}
	
	this.confirmDish = function(){
	    this.dish_preview.hide();
	    var penDish = model.getPendingDish().id;
	   	model.setPendingDish("");
	    model.addDishToMenu(penDish);
	    this.select_dish_view.show();
	}
	
	this.denyDish = function(){
	    this.dish_preview.hide();
	    model.setPendingDish("");
	    this.side_view.updateFunction();
	    this.select_dish_view.show();
	}

	this.lastDishBack = function(){
		this.last_overview.hide();
		this.side_view.show();
		this.select_dish_view.show();
	}

	this.fullRecipeMain = function(){
		this.last_overview.hide();
		this.full_recipe_view.show();
	}

	this.goToEditDinner = function(){
		this.full_recipe_view.hide();
		this.select_dish_view.show();
		this.side_view.show();
	}

	this.confirmedDinner = function(){
		this.select_dish_view.hide();
		this.side_view.hide();
		this.last_overview.show();
	}
}