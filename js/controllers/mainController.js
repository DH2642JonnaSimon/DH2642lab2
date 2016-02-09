var mainController = function(model,startView, sideView, selectDishView, dishPreview){
	this.dinner_model = model;
	this.start_view = startView;
	this.side_view = sideView;
	this.select_dish_view = selectDishView;
	this.dish_preview = dishPreview;


	this.newDinner = function(){
		this.start_view.hide();
		this.side_view.show();
		this.select_dish_view.show();
		$("#jumbotron").css("background-color", "rgba(0,0,0,0.7)");
	}
	
	this.previewDish = function(dish){
	   this.select_dish_view.hide();
	   model.addDishToMenu(dish.id);
	   var menu = model.getFullMenu();
	   var totalPrice = model.getTotalMenuPrice();
	   var pendingPrice = model.getDishPrice(dish);
	   var count = 0;
	   var prices = [];
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
	    var menu = model.getFullMenu();
	    var count = 0;
	    var prices = [];
	    for(d in menu){
	       var dishPrice = model.getDishPrice(menu[d]);
	       prices[count] = dishPrice;
	       count++;
	    }
	    var totalPrice = model.getTotalMenuPrice();
	    this.side_view.updateConfirmed(menu, prices, totalPrice);
	    this.select_dish_view.show();
	}
	
	this.denyDish = function(dishClicked){
	    this.dish_preview.hide();
	    model.removeDishFromMenu(dishClicked.id);
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
	        var dish = model.getDish(id);
	        var pendingPrice = model.getDishPrice(dish);
	        this.dish_preview.guestsUpdated(dish, guests, pendingPrice);
	    }
	}
}