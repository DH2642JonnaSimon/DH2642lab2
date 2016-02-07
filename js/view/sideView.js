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
}