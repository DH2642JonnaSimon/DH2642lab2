var selectController = function(mc, model, sv){
	this.mainController = mc;
	this.dm = model;
	this.selectView = sv;
	

	$("#selectInput").change(function() {
		var choice = $("#selectInput").val();
        $("#searchInput").val("");
       	var dishes = model.getAllDishes(choice);
		//sv.updateFunction(dishes);
	}).change();
	
	$("#searchButton").click(function(){
	    var choice = $("#selectInput").val();
	    var input = $("#searchInput").val();
	    var dishes = model.getAllDishes(choice, input);
	    //sv.updateFunction(dishes);
	});

   $(document).on('click', '.clickableDish', function(event) { 
       var dishID = $(this).attr("id");
       var dish = model.getDish(dishID);
       mc.previewDish(dish);
   });
}