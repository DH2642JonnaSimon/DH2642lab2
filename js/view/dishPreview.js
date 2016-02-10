var dishPreview = function(container){
	this.cnt = container;
	this.cnt.append ('<div id="dishPreview" class="col-xs-7 col-sm-9 col-md-9" style="margin: 0px;height:100%;width: 100%;"><div class="row" style="margin-top: 15px;display: flex;"><div id="mainContent" class="col-md-6" style="flex: 1;position: relative;padding-bottom: 39px;"><h1 id="headerContent"></h1><div id="imge" style="text-align: center;"></div><button id="back" type="button" class="btn btn-warning btn-responsive back" style="position: absolute;bottom: 0px;margin-bottom: 5px;">back to Select Dish</button></div><div id="ingredientsContent" style="flex: 1;background-color: rgba(246, 178, 107, 0.7);position: relative;padding-bottom: 39px;" class="col-md-6"><div class="table-responsive"><table style="height:100%;" class="table borderless" id="ingredients"></table></div><button id="confirm" type="button" class="btn btn-warning btn-responsive confirm" style="position: absolute; bottom: 0px;margin-bottom: 5px;">Confirm Dish</button></div></div><div id="Preparations"><br><h2 id="headerPrep">Preparations</h2><p id="instructions"></p></div></div>');

	$("#dishPreview").hide();

	this.showDish = function(dish, guests, pendingPrice){
		$("#dishPreview").show();
		$(".confirm").attr("id", dish.id);
		$(".back").attr("id", dish.id);
		$("#headerContent").html(dish.name);
		var source = "images/" + dish.image;
		$("#imge").html('<image class="img-thumbnail " id="imagee" src="'+ source + '" style=""></image>');
		$("#instructions").html(dish.description);
		var str = "";
		str += "<h3 style='width: 100%;'>Ingredients for " + guests  + "People</h3><tbody style='border-top: 1px solid #000;'>";
		
		for(d in dish.ingredients){
		    var quantity = dish.ingredients[d].quantity*guests;
		    var price = dish.ingredients[d].price*guests;
		    str += "<tr><td style='border: 0px !important;'>" + quantity.toFixed(2) + " " + dish.ingredients[d].unit + "</td><td style='border: 0px !important;'>";
		    str += dish.ingredients[d].name + "</td><td style='border: 0px !important;'>";
		    str += price.toFixed(2) + "</td><td style='border: 0px !important;'></tr>";
		}
		str += "<tr style='border-top: 1px solid #000;'><td style='text-align:right;border: 0px !important;' colspan='4'>"+ pendingPrice +"</td></tr>";
		$("#ingredients").html(str);
		
	}
	
	this.guestsUpdated = function(dish, guests, pendingPrice){
	    var str = "";
		str += "<h3>Ingredients for " + guests  + "People</h3><table>";
		
		for(d in dish.ingredients){
		    var quantity = dish.ingredients[d].quantity*guests;
		    var price = dish.ingredients[d].price*guests;
		    str += "<tr><td style='border: 0px !important;'>" + quantity.toFixed(2) + " " + dish.ingredients[d].unit + "</td><td>";
		    str += dish.ingredients[d].name + "</td><td>";
		    str += price.toFixed(2) + "</td><td style='border: 0px !important;'></tr>";
		}
		str += "<tr><td style='text-align:right;'>"+ pendingPrice +"</td></tr>";
		$("#ingredients").html(str);
	}

	this.hide = function(){
		$("#dishPreview").hide();
	}
}