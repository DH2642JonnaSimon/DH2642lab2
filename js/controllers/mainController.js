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
	
	this.previewDish = function(dish){
	   this.select_dish_view.hide();
	   model.setPendingDish(dish);
	   var menu = model.getFullMenu();
	   var totalPrice = model.getTotalMenuPrice();
	   var count = 0;
	   var prices = [];
	   dish = model.getPendingDish();
	   var pendingPrice = model.getDishPrice(model.getPendingDish());
	   for(d in menu){
	       var dishPrice = model.getDishPrice(menu[d]);
	       prices[count] = dishPrice;
	       count++;
	   }
	   var guests = model.getNumberOfGuests();
	   
	   if(guests == "" || guests == null || guests =="undefiend"){
	       guests = 1;
	   }
	   this.side_view.updatePending(dish, pendingPrice, menu, totalPrice, prices);
	   this.dish_preview.showDish(dish, guests, pendingPrice);
	}
	
	this.confirmDish = function(dishClick){
	    this.dish_preview.hide();
	    model.addDishToMenu(model.getPendingDish().id);
	    model.setPendingDish("");
	    var menu = model.getFullMenu();
	    var count = 0;
	    var prices = [];
	    for(d in menu){
	    	var dishPrice = 0.00;
	    	for(ingredient in menu[d].ingredients){
	    		dishPrice += menu[d].ingredients[ingredient].price;
	    	}
	    	prices.push(dishPrice);
	    }
	    var totalPrice = model.getTotalMenuPrice();
	    this.side_view.updateConfirmed(menu, prices, totalPrice);
	    this.select_dish_view.show();
	}
	
	this.denyDish = function(dishClicked){
	    this.dish_preview.hide();
	    model.setPendingDish("");
	    var menu = model.getFullMenu();
	    var count = 0;
	    var prices = [];
	    for(d in menu){
	       if(menu[d] != null && menu[d] != "" && menu[d] != '' && menu[d] != "undefined"){
	        var dishPrice = model.getDishPrice(menu[d]);
	        prices[count] = dishPrice;
	       }
	       count++;
	    }
	    var totalPrice = model.getTotalMenuPrice();
	    this.side_view.updateConfirmed(menu, prices, totalPrice);
	    this.select_dish_view.show();
	}
	
	this.updatedNumberOfGuests = function(guests){
	    var id = $(".confirm").attr("id");
	    if(id != null || id!="" || id!="undefined"){
	        var dish = model.getPendingDish();
	        var pendingPrice = model.getDishPrice(model.getPendingDish());
	        this.dish_preview.guestsUpdated(dish, guests, pendingPrice);
	    }
	}

	this.lastDishInfo = function(){
		this.side_view.hide();
		this.select_dish_view.hide();
		this.last_overview.show();
	}

	this.lastDishBack = function(){
		this.last_overview.hide();
		this.side_view.show();
		this.select_dish_view.show();
	}

	this.fullRecipeMain = function(){
		this.last_overview.hide();
		var menu = model.getFullMenu();
		var numOfGuest = model.getNumberOfGuests();
		this.full_recipe_view.show(menu, numOfGuest);
	}

	this.goToEditDinner = function(){
		this.full_recipe_view.hide();
		this.select_dish_view.show();
		this.side_view.show();
	}

	this.confirmedDinner = function(){
		this.lastDishInfo();
        var finalmenu = model.getFullMenu();
        var totalPrice = model.getTotalMenuPrice();
        var numGuest = model.getNumberOfGuests();
        var prices = [];
        var i = 0;
        for(x in finalmenu){
        	prices[i] = model.getDishPrice(finalmenu[x]);
        	i++;
        }

        this.last_overview.overviewMenu(finalmenu, totalPrice, numGuest, prices);
	}
}