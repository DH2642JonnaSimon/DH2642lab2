var sideView = function(container, model){
	this.cnt = container;
	this.cnt.append('<div id="sideView" class="col-xs-5 col-sm-3 col-md-3"><h3 style="margin-left: 10px;">My Dinner</h3><p id="peopleParagraph">People:</p><input class="form-control" id="guestsInput" value="" type="number" name="Guests" min="1"><table class="table table-condensed table-hover" id="sideViewTable" style="text-align: right;"><thead style="background-color: #C0C0C0;border-top: solid 3px black;border-bottom: solid 3px black;"><tr><th style="text-align: left;">Dish Name</th><th style="text-align: right;">Cost</th></tr></thead><tbody id="chart"><tr><td id="dish" style="text-align: left;">Pending</td><td id="price" style="text-align: right;">0.00</td></tr><tr><td></td><td id="totalPrice"></td></tr></tbody></table><div style="width:100%;text-align: center;"><button value="false" id="confirmDinner" type="button" class="btn btn-warning disabled btn-responsive">Confirm Dinner</button></div></div>');
	$("#guestsInput").val(model.getNumberOfGuests().toString());
	$("#totalPrice").html("SEK " + model.getTotalMenuPrice().toFixed(2).toString());
	model.addObserver(this);
	$("#sideView").hide();

	

	this.show = function(){
		$("#sideView").show();
	}

	this.hide = function(){
		$("#sideView").hide();
	}


	this.updateFunction = function(data){

		var dish = model.getPendingDish();
		var menu = model.getFullMenu();
		var totalPrice = model.getTotalMenuPrice();
		var count = 0;
	   	var prices = [];
	   	dish = model.getPendingDish();
	   	var pendingPrice = model.getDishPrice(model.getPendingDish());
	   	for(d in menu){
	   		var amountOfIng = 0;
	   		for(a in menu[d].Ingredients) {
	   			console.log("afdsfsdfdfsdfds");
	   			amountOfIng += 1;
	   		}
	       	var dishPrice = amountOfIng * model.getNumberOfGuests();
	       	console.log(dishPrice);
	       	prices[count] = dishPrice;
	       	count++;
	   	}
	   	var guests = model.getNumberOfGuests();

	   	if(dish != null && dish != "" && dish != undefined){
		    var count=0;
		    $("#chart").empty();

		    for(d in menu){
		        if(menu[d].Category === dish.Category){
		            count +=1;
		            continue;
		            
		        }
		        if(menu[d] !== 'undefined' && menu[d] !== "" && menu[d] !== null){
		            $("#chart").append('<tr><td style="text-align: left;">' + menu[d].Title + '</td><td style="text-align: right;">' + prices[count].toFixed(2) + '<span id="' + menu[d].RecipeID + '" class="glyphicon glyphicon-remove rm"></tr>');
		        }
		        count +=1;
		    }
		   	$("#chart").append('<tr><td id="dish" style="text-align: left;">Pending</td><td id="price" style="text-align: right;">0.00</td></tr>');
		    $("#chart").append('<tr><td></td><td id="totalPrice"></td></tr>');
		    $("#dish").html();
		    $("#price").html(pendingPrice.toFixed(2));
		    $("#totalPrice").html("SEK " + totalPrice.toFixed(2));
		    $("#confirmDinner").attr("class", "btn btn-warning disabled btn-responsive");
		   	$("#confirmDinner").val("false");

	   } else {
		   	$("#chart").empty();
		    var count = 0;
		    for(d in menu){
		        if(menu[d] !== 'undefined' && menu[d] !== "" && menu[d] !== null){
		            $("#chart").append('<tr><td style="text-align: left;">' + menu[d].Title + '</td><td style="text-align: right;">' + prices[count].toFixed(2) + '<span id="' + menu[d].id + '" class="glyphicon glyphicon-remove rm"></td></tr>');
		        }
		        count++;
		    }
		    $("#chart").append('<tr><td id="dish" style="text-align: left;">Pending</td><td id="price" style="text-align: right;">0.00</td></tr>');
		    $("#chart").append('<tr><td></td><td id="totalPrice">' + totalPrice.toFixed(2) + ' SEK</td></tr>');
		    if(totalPrice == 0){
		    	$("#confirmDinner").attr("class", "btn btn-warning disabled btn-responsive");
		    }else{
		    	$("#confirmDinner").attr("class", "btn btn-warning active btn-responsive");
		    }
		}
	}
	
}