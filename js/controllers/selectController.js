
var selectController = function(mc, model, sv){
	this.mainController = mc;
	this.dm = model;
	this.selectView = sv;
	

	$("#selectInput").change(function() {
		//alert("Heeeeeeej");
		var choice = $("#selectInput").val();
        $("#searchInput").val("");
		var a = model.getAllDishes(choice);
		//alert(a[0].name);
		sv.selectDishes(a);

		
	}).change();
	
	$("#searchButton").click(function(){
	    var choice = $("#selectInput").val();
	    var input = $("#searchInput").val();
	    var a = model.getAllDishes(choice, input);
	    sv.selectDishes(a);
	});

   $(document).on('click', '.clickableDish', function(event) { 
       var dishID = $(this).attr("id");
       var dish = model.getDish(dishID);
       mc.previewDish(dish);
   });
}