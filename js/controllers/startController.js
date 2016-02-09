var startController = function(mc){
	console.log(mc);
	this.mainController = mc;
	$( "#newDinner" ).click(function() {
  		mc.newDinner();
	});

}



