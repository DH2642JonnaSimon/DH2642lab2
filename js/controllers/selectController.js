var selectController = function(mc, model, sv){
	this.mainController = mc;
	this.dm = model;
	this.selectView = sv;
	

	$("#selectInput").change(function() {
		var choice = $("#selectInput").val();
    var input = $("#searchInput").val();
        $("#searchInput").val("");
        $("#viewDishes").empty();
        mc.loadingDishes(choice, input);
        model.resetPage();
	}).change();
	
	$("#searchButton").click(function(){
	    var choice = $("#selectInput").val();
      var input = $("#searchInput").val();
	   	$("#viewDishes").empty();
      mc.loadingDishes(choice, input);
	   	model.resetPage();
	});

   $(document).on('click', '.clickableDish', function(event) { 
       var dishID = $(this).attr("id");
       mc.previewDish();
       mc.previewDish(dishID);
   });

 	$(document).ready(function(){  
	jQuery(function($) {
    $('#viewDishes').on('scroll', function() {
        if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
          model.nextPage();
          mc.loadingDishes();
        }
    })
});
});
}