var startController = function(mc){
	this.mainController = mc;
	$( "#newDinner" ).click(function() {
  		mc.newDinner();
	});

}



