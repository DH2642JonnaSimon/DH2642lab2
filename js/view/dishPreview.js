var dishPreview = function(container){
	this.cnt = container;
	this.cnt.append ('<div id="dishPreview" class="col-xs-7 col-sm-9 col-md-9" style="margin: 0px;height:100%;"><div class="row"><div id="mainContent" class="col-xs-6 col-sm-6 col-md-6"><h1 id="headerContent"></h1><image class="img-thumbnail " id="imagee" style="height:180px;width: 180px;"></image></div><div id="ingredientsContent" class="col-xs-6 col-sm-6 col-md-6"><table id="ingredients"></table><button id="confirm" type="button" class="btn btn-warning btn-responsive confirm" style="">Confirm Dish</button></div></div><div id="Preparations"><button id="back" type="button" class="btn btn-warning btn-responsive back" style="">back to Select Dish</button><br><h2 id="headerPrep">Preparations</h2><p id="instructions"></p></div></div>');

	$("#dishPreview").hide();

	this.showDish = function(dish, guests){
		$("#dishPreview").show();
		$(".confirm").attr("id", dish.id);
		$(".back").attr("id", dish.id);
		$("#headerContent").html(dish.name);
		var source = "images/" + dish.image;
		$("#imagee").attr("scr", source);
		$("#instructions").html(dish.description);
		var str = "";
		str += "<h3>Ingredients for " + guests  + "People</h3><table>";
		
		for(d in dish.ingredients){
		    var quantity = dish.ingredients[d].quantity*guests;
		    var price = dish.ingredients[d].price*guests;
		    str += "<tr><td>" + quantity.toFixed(2) + " " + dish.ingredients[d].unit + "</td><td>";
		    str += dish.ingredients[d].name + "</td><td>";
		    str += price.toFixed(2) + "</td><td></tr>";
		}
		$("#ingredients").html(str);
		
	}



	this.hide = function(){
		$("#dishPreview").hide();
	}
}