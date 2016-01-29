var sideView = function(container){
	this.cnt = container;
	this.cnt.append('<div id="sideView" class="col-xs-4 col-sm-2 col-md-2" id="sideMenuView">Number of guests: <span id="numberOfGuests"></span><br><input id="guestsInput" type="number" name="Guests" min="1"><table class="table table-hover table-responsive"><thead><tr><th>Dish Name</th><th>Cost</th></tr></thead><tbody><tr><td>Pending</td><td>0.00</td></tr><tr><td></td><td>SEK 0.00</td></tr></tbody></table></div>');
	$("#sideView").hide();

	

	this.show = function(){
		$("#sideView").show();
	}

	this.hide = function(){
		$("#sideView").hide();
	}
}