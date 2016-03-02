var dishPreview = function(container, model){
	this.cnt = container;
	this.cnt.append ('<div id="dishPreview" class="col-xs-7 col-sm-9 col-md-9 pre-scrollable"><div class="row" id="dishPreviewRow"><div id="mainContent" class="col-xs-12 col-sm-12 col-md-6"><h1 id="headerContent"></h1><div id="imgeDiv"></div><button id="back" type="button" class="btn btn-warning btn-responsive back">back to Select Dish</button></div><div id="ingredientsContent" class="col-xs-12 col-sm-12 col-md-6"><div class="table-responsive"><table class="table borderless" id="ingredients"></table></div><button id="confirm" type="button" class="btn btn-warning btn-responsive confirm">Confirm Dish</button></div></div><div id="Preparations"><br><h2 id="headerPrep">Preparations</h2><p id="instructions"></p></div></div>');
	model.addObserver(this);
	$("#dishPreview").hide();

	this.loadingPage = function() {
		$("#imgeDiv").html(" ");
			$("#instructions").html(" ")
			$("#headerContent").html(" ");
			$("#ingredients").html(" ");
		$("#dishPreview").append("<div id='loadImage' style='display: table;text-align: center;'><div style='display:table-cell;vertical-align: middle;'><image src='images/loading.gif'></image></div></div>");
	}

	this.updateFunction = function(data) {
		$("#loadImage").remove();
		$("#error").remove();
		if(data =="undefined" || data== null || data=="" || data=="error"){
			$("#imgeDiv").html(" ");
			$("#instructions").html(" ")
			$("#headerContent").html(" ");
			$("#ingredients").html(" ");
			$("#dishPreview").append("<div id='error' style='display: table;text-align: center;'><div style='display:table-cell;vertical-align: middle;'><p>ERROR</p></div></div>");
			return;
		}
		
		var guests = model.getNumberOfGuests();
		var dish = data;
		$(".confirm").attr("id", dish.RecipeID);
		$(".back").attr("id", dish.RecipeID);
		$("#headerContent").html(dish.Title);
		var source = dish.ImageURL;
		$("#imgeDiv").html('<image class="img-thumbnail " id="imagee" src="'+ source + '" style=""></image><p>'+dish.Description+'</p>');
		$("#instructions").html(dish.Instructions);
		var str = "";
		str += "<h3 style='width: 100%;'>Ingredients for " + guests  + " People</h3><tbody style='border-top: 1px solid #000;'>";
		
		for(d in dish.Ingredients){
		    var quantity = guests*dish.Ingredients[d].Quantity;
		    var price = quantity;
		    str += "<tr><td style='border: 0px !important;'>" + quantity.toFixed(2) + " " + dish.Ingredients[d].Unit + "</td><td style='border: 0px !important;'>";
		    str += dish.Ingredients[d].Name + "</td><td style='border: 0px !important;'>";
		    str += price.toFixed(2) + "</td><td style='border: 0px !important;'></tr>";
		}

				var TotalPrice = model.getTotalMenuPrice()
		str += "<tr style='border-top: 1px solid #000;'><td style='text-align:right;border: 0px !important;' colspan='4'>"+ TotalPrice.toFixed(2) +" SEK</td></tr>";
		$("#ingredients").html(str);
	}

	this.show = function(){
		$("#dishPreview").show();
	}

	this.hide = function(){
		$("#dishPreview").hide();
	}
}