var selectController = function(model, sv){
	this.dm = model;
	this.selectView = sv;

	$("#selectInput").click(function() {
		alert("Heeeeeeej");
		var choice = $("#selectInput").val();

		var a = model.getAllDishes(choice);
		alert(a[0].name);
		sv.selectDishes(a);

		
	});

}