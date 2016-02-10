var sideView = function(container){
	this.cnt = container;
	this.cnt.append('<div id="sideView" class="col-xs-5 col-sm-3 col-md-3" style="text-align: center;border-right: 3px solid #000;"><br>Number of guests: <span id="numberOfGuests">1</span><br><h3>My Dinner</h3><p style="display: inline-block;margin-right: 10px;">People</p><input class="form-control" id="guestsInput" style="align-text: center;padding 0;width: 50%;display: inline-block;" type="number" name="Guests" value="1" min="1"><table class="table table-condensed"><thead><tr><th>Dish Name</th><th>Cost</th></tr></thead><tbody id="chart"><tr><td id="dish">Pending</td><td id="price">0.00</td></tr><tr><td></td><td id="totalPrice">SEK 0.00</td></tr></tbody></table><button id="confirmDinner" type="button" class="btn btn-warning btn-responsive">Confirm Dinner</button></div>');
	$("#sideView").hide();

	

	this.show = function(){
		$("#sideView").show();
	}

	this.hide = function(){
		$("#sideView").hide();
	}
	
	this.updatePending = function(dish, pendingPrice, menu, totalPrice, prices){
	    var count=0;
	    $("#chart").empty();
	    $("#chart").append('<tr><td id="dish">Pending</td><td id="price">0.00</td></tr>');
	    for(d in menu){
	        if(menu[d].type === dish.type){
	            count +=1;
	            continue;
	            
	        }
	        if(menu[d] !== 'undefined' && menu[d] !== "" && menu[d] !== null){
	            $("#chart").append('<tr><td>' + menu[d].name + '</td><td>' + prices[count] + '<span id="' + menu[d].id + '" class="glyphicon glyphicon-remove rm"></tr>');
	        }
	        count +=1;
	    }
	    $("#chart").append('<tr><td></td><td id="totalPrice">SEK 0.00</td></tr>');
	    $("#dish").html();
	    $("#price").html(pendingPrice);
	    $("#totalPrice").html(totalPrice);
	}
	
	this.updateConfirmed = function(menu, prices, totalPrice){
	    $("#chart").empty();
	    $("#chart").append('<tr><td id="dish">Pending</td><td id="price">0.00</td></tr>');
	    var count = 0;
	    for(d in menu){
	        if(menu[d] !== 'undefined' && menu[d] !== "" && menu[d] !== null){
	            $("#chart").append('<tr><td>' + menu[d].name + '</td><td>' + prices[count] + '<span id="' + menu[d].id + '" class="glyphicon glyphicon-remove rm"></td></tr>');
	        }
	        count++;
	    }
	    $("#chart").append('<tr><td></td><td id="totalPrice">' + totalPrice + ' SEK</td></tr>');
	}
}