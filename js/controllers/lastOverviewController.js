var lastOverviewController = function(mc, model, last_overview){
	this.mainController = mc;
	this.dm = model;
	this.lastOverview = last_overview;

	console.log('Inne i den fina lastOverviewControllern');


	$("#confirmDinner").click(function() {
		mc.lastDishInfo();
		var finalmenu = model.getFullMenu();

		console.log(finalmenu);
		console.log(finalmenu.starter);
	    last_overview.overviewMenu(finalmenu);
	});

}