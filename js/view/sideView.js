<<<<<<< HEAD
var sideView = function(container){
	this.cnt = container;
	this.cnt.append('<div id="sideView" class="col-xs-5 col-sm-3 col-md-3" style="text-align: center;"><br>Number of guests: <span id="numberOfGuests">1</span><br><input class="form-control" id="guestsInput" style="align-text: center;padding 0;" type="number" name="Guests" value="1" min="1"><table class="table table-condensed"><thead><tr><th>Dish Name</th><th>Cost</th></tr></thead><tbody id="chart"><tr><td id="dish">Pending</td><td id="price">0.00</td></tr><tr><td></td><td id="totalPrice">SEK 0.00</td></tr></tbody></table><button id="confirmDinner" type="button" class="btn btn-warning btn-responsive">Confirm Dinner</button></div>');
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
	            $("#chart").append('<tr><td>' + menu[d].name + '</td><td>' + prices[count] + '</td></tr>');
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
	            $("#chart").append('<tr><td>' + menu[d].name + '</td><td>' + prices[count] + '</td></tr>');
	        }
	        count++;
	    }
	    $("#chart").append('<tr><td></td><td id="totalPrice">' + totalPrice + ' SEK</td></tr>');
	}
=======
var sideView = function(container){
	this.cnt = container;
	this.cnt.append('<div id="sideView" class="col-xs-5 col-sm-3 col-md-3" style="text-align: center;"><br>Number of guests: <span id="numberOfGuests"></span><br><input class="form-control" id="guestsInput" style="align-text: center;padding 0;" type="number" name="Guests" min="1"><table class="table table-condensed"><thead><tr><th>Dish Name</th><th>Cost</th></tr></thead><tbody><tr><td>Pending</td><td>0.00</td></tr><tr><td></td><td>SEK 0.00</td></tr></tbody></table><button id="confirmDinner" type="button" class="btn btn-warning btn-responsive">Confirm Dinner</button></div>');
	$("#sideView").hide();

	

	this.show = function(){
		$("#sideView").show();
	}

	this.hide = function(){
		$("#sideView").hide();
	}
>>>>>>> origin/MVC
}