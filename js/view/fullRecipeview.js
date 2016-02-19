//ExampleView Object constructor
var fullRecipe = function (container, model) {

	this.cnt = container;
	this.cnt.append ('<div id="fullRecipeMain" class="col-xs-12 col-sm-12 col-md-12" style="margin: 0px;height:100%;"></div>');
	model.addObserver(this);
	$("#fullRecipeMain").hide();

	this.hide = function(){
		$("#fullRecipeMain").hide();
	}

	this.show = function(){
		$("#fullRecipeMain").show();
	}


	this.updateFunction = function(){
		var menu = model.getFullMenu();
		var numOfGuest = model.getNumberOfGuests();

		$("#fullRecipeMain").empty();
		$("#fullRecipeMain").append('<div class="row" id="headRow"><div id="buttondiv" class="col-xs-12 col-sm-12 col-md-12"><div id="mainContent" class="col-xs-12 col-sm-8 col-md-8"><h1 id="headerContent">My dinner: '+numOfGuest+' people</h1></div><div class="col-xs-12 col-sm-4 col-md-4"><button id="back3" type="button" class="button back btn btn-warning btn-responsive">Go back and edit dinner</button></div></div></div>');
		$("#andra").css("height", $("#fullRecipeMain").height()-$("#headRow").height());

		var count = 0;
	    var str = "";
	        
	    str += "<div class='col-md-12 col-sm-12 table pre-scrollable' id='andra' style='margin: 0px;padding-bottom: 250px;'>";
		for(var x in menu){

			console.log(menu[x].image);

			if(menu[x] == null || menu[x] == "undefined" || menu[x] == ""){
					continue;
				}
			
			str += "<div class='row'><div id='fullRecipeOver' class='col-xs-12 col-sm-12 col-md-12'><div class='col-md-3 col-sm-3'><image class='col-md-3 col-sm-3 img-thumbnail' src='images/"+ menu[x].image +"' style='height:180px;width: 180px;'></image></div><div class='col-md-3 col-sm-3'><h3>" + menu[x].name + "</h3><br><lu>"

			for(var i in menu[x].ingredients){
				str += "<li>" + menu[x].ingredients[i].name + "</li>";
			}

			str += "</lu></div><div class='col-md-6 col-sm-6'>" + menu[x].description + "</div></div></div>";
		}
		str += "</div>";
		$("#fullRecipeMain").append(str);
	}
$(document).ready(function() {
	    $(window).resize(function(){
			$("#andra").css("height", $("#fullRecipeMain").height()-$("#headRow").height());
		});
});
}

