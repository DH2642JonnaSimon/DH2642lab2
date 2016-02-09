//ExampleView Object constructor
var fullRecipe = function (container) {
	console.log("Inne i view");

	this.cnt = container;
	this.cnt.append ('<div id="fullRecipeMain" class="col-xs-12 col-sm-12 col-md-12" style="margin: 0px;height:100%;"><p>Nu lollar vi järnet</p></div>');
	$("#fullRecipeMain").hide();

	this.show = function(menu){
		$("#fullRecipeMain").show();
		$("#fullRecipeMain").empty();
		var count = 0;
	    var str = "";
	        
	    str += "<div class='table pre-scrollable' id='andra' style='margin: 0px;'>";
		for(var x in menu){
			str += "<div class='row'><div class='col-md-6 col-sm-6'>" + menu[x].name + "</div><div class='col-md-6 col-sm-6'>" + menu[x].description + "</div></div>";
		}
		str += "</div>";
		$("#fullRecipeMain").html(str);
	}



}

