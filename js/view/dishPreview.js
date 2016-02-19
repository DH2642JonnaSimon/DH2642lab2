var dishPreview = function(container, model){
	this.cnt = container;
	this.cnt.append ('<div id="dishPreview" class="col-xs-7 col-sm-9 col-md-9 pre-scrollable"><div class="row" id="dishPreviewRow"><div id="mainContent" class="col-xs-12 col-sm-12 col-md-6"><h1 id="headerContent"></h1><div id="imgeDiv"></div><button id="back" type="button" class="btn btn-warning btn-responsive back">back to Select Dish</button></div><div id="ingredientsContent" class="col-xs-12 col-sm-12 col-md-6"><div class="table-responsive"><table class="table borderless" id="ingredients"></table></div><button id="confirm" type="button" class="btn btn-warning btn-responsive confirm">Confirm Dish</button></div></div><div id="Preparations"><br><h2 id="headerPrep">Preparations</h2><p id="instructions"></p></div></div>');
	
	$("#dishPreview").hide();
	model.addObserver(this);


	this.updateFunction = function() {
		var guests = model.getNumberOfGuests();
		var dish = model.getPendingDish();
	   	var pendingPrice = model.getDishPrice(dish);
		var str = "";
		str += "<h3>Ingredients for " + guests  + " People</h3><tbody style='border-top: 1px solid #000;'>";
		
		for(d in dish.ingredients){
		    var quantity = dish.ingredients[d].quantity;
		    var price = dish.ingredients[d].price;
		    str += "<tr><td style='border: 0px !important;'>" + quantity.toFixed(2) + " " + dish.ingredients[d].unit + "</td><td style='border: 0px !important;'>";
		    str += dish.ingredients[d].name + "</td><td style='border: 0px !important;'>";
		    str += price.toFixed(2); + "</td><td style='border: 0px !important;'></tr>";
		}
		str += "<tr style='border-top: 1px solid #000;'><td style='text-align:right;border: 0px !important;' colspan='3'>"+ pendingPrice.toFixed(2) +"</td></tr>";
		$("#ingredients").html(str);
	}

	this.showDish = function(){
		var guests = model.getNumberOfGuests();
		var dish = model.getPendingDish();
	   	var pendingPrice = model.getDishPrice(dish);
		$("#dishPreview").show();
		$(".confirm").attr("id", dish.id);
		$(".back").attr("id", dish.id);
		$("#headerContent").html(dish.name);
		var source = "images/" + dish.image;
		$("#imgeDiv").html('<image class="img-thumbnail " id="imagee" src="'+ source + '" style=""></image>');
		$("#instructions").html(dish.description);
		var str = "";
		str += "<h3 style='width: 100%;'>Ingredients for " + guests  + "People</h3><tbody style='border-top: 1px solid #000;'>";
		
		for(d in dish.ingredients){
		    var quantity = dish.ingredients[d].quantity;
		    var price = dish.ingredients[d].price;
		    str += "<tr><td style='border: 0px !important;'>" + quantity.toFixed(2) + " " + dish.ingredients[d].unit + "</td><td style='border: 0px !important;'>";
		    str += dish.ingredients[d].name + "</td><td style='border: 0px !important;'>";
		    str += price.toFixed(2) + "</td><td style='border: 0px !important;'></tr>";
		}
		str += "<tr style='border-top: 1px solid #000;'><td style='text-align:right;border: 0px !important;' colspan='4'>"+ pendingPrice.toFixed(2) +"</td></tr>";
		$("#ingredients").html(str);
		
	}


	this.hide = function(){
		$("#dishPreview").hide();
	}
}