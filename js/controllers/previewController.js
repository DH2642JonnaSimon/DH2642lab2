var previewController = function(mc){
	this.mainController = mc;

	$("#confirm").click(function() {
		mc.confirmDish();
	});
	
	$("#back").click(function() {
	    mc.denyDish();
	});


}