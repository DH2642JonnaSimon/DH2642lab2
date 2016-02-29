var selectController = function(mc, model, sv){
	this.mainController = mc;
	this.dm = model;
	this.selectView = sv;
	

	$("#selectInput").change(function() {
		var choice = $("#selectInput").val();
        $("#searchInput").val("");
        $("#viewDishes").empty();
        model.resetPage();
       	var dishes = model.getAllDishes(choice);
	}).change();
	
	$("#searchButton").click(function(){
	    var choice = $("#selectInput").val();
	    var input = $("#searchInput").val();
	   	$("#viewDishes").empty();
	   	model.resetPage();
	    var dishes = model.getAllDishes(choice, input);
	});

   $(document).on('click', '.clickableDish', function(event) { 
       var dishID = $(this).attr("id");
       mc.previewDish();
       model.getDish(dishID);
   });

jQuery(function($) {
    $('#viewDishes').on('scroll', function() {
        if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
          model.nextPage();
   			  model.getAllDishes();
        }
    })
});
}