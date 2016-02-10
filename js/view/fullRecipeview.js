//ExampleView Object constructor
var fullRecipe = function (container) {

	this.cnt = container;
	this.cnt.append ('<div id="fullRecipeMain" class="col-xs-12 col-sm-12 col-md-12" style="margin: 0px;height:100%;"></div>');
	$("#fullRecipeMain").hide();


	this.show = function(menu){
		$("#fullRecipeMain").show();
		$("#fullRecipeMain").empty();
		$("#fullRecipeMain").append('<div id="buttonDiv" class="col-xs-12 col-sm-12 col-md-12" style="text-align: center;"><button id="fullRecipe" type="button" class="btn btn-warning btn-responsive back" style="">Go to full recipe</button></div>');

		var count = 0;
	    var str = "";
	        
	    str += "<div class='col-md-12 col-sm-12 table pre-scrollable' id='andra' style='margin: 0px;'>";
		for(var x in menu){
			if(menu[x] == null || menu[x] == "undefined" || menu[x] == ""){
					continue;
				}
			str += "<div class='row'><image class='col-md-2 col-sm-2 img-thumbnail' src='images/"+ menu[x].image +" style='height:180px;width: 180px;'></image><div class='col-md-4 col-sm-4'>" + menu[x].name + "<br>"+menu[x].ingredients.name+"</div><div class='col-md-6 col-sm-6'>" + menu[x].description + "</div></div>";
		}
		str += "</div>";
		$("#fullRecipeMain").html(str);
	}



}

