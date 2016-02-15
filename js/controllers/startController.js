var startController = function(mc){
	this.mainController = mc;
	$( "#buttonInWell" ).click(function() {
  		$("body").css("background-image", "none")
  		mc.newDinner();
	});

}



