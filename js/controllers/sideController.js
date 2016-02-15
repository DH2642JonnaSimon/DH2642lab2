var sideController = function(mc, model, sv){
	this.mainController = mc;
	this.dm = model;
	this.side_view = sv;
	this.dm.setNumberOfGuests(1);
	
	$( "#guestsInput" ).change(function() {
			var val = $("#guestsInput").val();
  			model.setNumberOfGuests(val);
  			var menu = model.getFullMenu();
            var totalPrice = model.getTotalMenuPrice();
  			var count = 0;
	        var prices = [];
    	    for(d in menu){
    	       if(menu[d] != null && menu[d] != "" && menu[d] != '' && menu[d] != "undefined"){
    	        var dishPrice = model.getDishPrice(menu[d]);
    	        prices[count] = dishPrice;
    	       }else{
    	           prices[count] = 0;
    	       }
    	       count++;
    	    }
    	    
    	    //var pendingDish = $(".confirm").attr("id");
    	    pendingDishen = model.getPendingDish();

    	    if(pendingDishen == ""){
    	        sv.updateConfirmed(menu, prices, totalPrice);
    	    }else{
    	        var dishPrice = model.getDishPrice(pendingDishen);
    	        sv.updatePending(pendingDishen, dishPrice, menu, totalPrice, prices);
    	        mc.updatedNumberOfGuests(val);
    	    }
	});

    $(document).on('click', '.rm', function(event) {
        model.removeDishFromMenu(event.target.id);
        var menu = model.getFullMenu();
        var count = 0;
        var prices = [];
        for(d in menu){
           if(menu[d] != null && menu[d] != "" && menu[d] != '' && menu[d] != "undefined"){
            var dishPrice = model.getDishPrice(menu[d]);
            prices[count] = dishPrice;
           }else{
               prices[count] = 0;
           }
           count++;
        }
        var pendingDish = $(".confirm").attr("id");
        if(totalPrice == "undefined" || totalPrice == null || totalPrice == ""){
            totalPrice = 0;
        }
        
        pendingDishen = model.getDish(pendingDish);
        var totalPrice = model.getTotalMenuPrice();
        if(pendingDish == null || pendingDish == "undefined" || pendingDish == "" || pendingDish == "confirm" || pendingDish == "f"){
            sv.updateConfirmed(menu, prices, totalPrice);
        }else{
            var dishPrice = model.getDishPrice(pendingDishen);
            sv.updatePending(pendingDishen, dishPrice, menu, totalPrice, prices);
        }
   });

    $("#confirmDinner").click(function() {
        mc.confirmedDinner();
    });

}