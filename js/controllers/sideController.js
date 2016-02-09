var sideController = function(mc, model, sv){
	this.mainController = mc;
	this.dm = model;
	this.side_view = sv;
	
	$( "#guestsInput" ).change(function() {
			var val = $("#guestsInput").val();
  			model.setNumberOfGuests(val);
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
    	    var totalPrice = model.getTotalMenuPrice();
  			sv.updateConfirmed(menu, prices, totalPrice);
  			$("#numberOfGuests").html(model.getNumberOfGuests());
	});

/*  $( "#confirmDinner" ).click(function() {
      this.hide = function(){
        $("#sideController").hide();
  }
  });*/


}