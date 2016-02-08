var previewController = function(mc, model, pv){
	this.mainController = mc;
	this.dm = model;
	this.previewDish = pv;

	$("#confirm").click(function() {
	    var dishID = $(this).attr("id");
        var dishClick = model.getDish(dishID);
		mc.confirmDish(dishClick);
	});
	
	$("#back").click(function() {
	    var dishID = $(this).attr("id");
        var dishClicked = model.getDish(dishID);
	    mc.denyDish(dishClicked);
	});


}