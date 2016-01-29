var sideController = function(mc, model){
	this.mainController = mc;
	this.dm = model;
	
	$( "#guestsInput" ).change(function() {
			var val = $("#guestsInput").val();
  			model.setNumberOfGuests(val);
  			$("#numberOfGuests").html(model.getNumberOfGuests());
	});

}