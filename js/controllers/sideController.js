var sideController = function(mc, model, sv){
	this.mainController = mc;
	this.dm = model;
	this.side_view = sv;
	this.dm.setNumberOfGuests(1);
	
	$( "#guestsInput" ).change(function() {
			var val = $("#guestsInput").val();
  			model.setNumberOfGuests(val);
	});

    $(document).on('click', '.rm', function(event) {
        model.removeDishFromMenu(event.target.id);
   });

    $("#confirmDinner").click(function() {
        mc.confirmedDinner();
    });

}