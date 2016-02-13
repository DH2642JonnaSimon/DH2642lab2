var previewController = function(mc, model, pv){
	this.mainController = mc;
	this.dm = model;
	this.previewDish = pv;

	$("#confirm").click(function() {
	    var dishID = $(this).attr("id");
	    $(".confirm").attr("id","f");
        var dishClick = model.getPendingDish();
		mc.confirmDish(dishClick);
	});
	
	$("#back").click(function() {
	    var dishID = $(this).attr("id");
	    $(".confirm").attr("id","f");
        var dishClicked = model.getDish(dishID);
	    mc.denyDish(dishClicked);
	});


}