//ExampleView Object constructor
var lastOverview = function (container) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	this.cnt = container;
	this.cnt.append ('<div id="lastOverview" class="col-xs-12 col-sm-12 col-md-12" style="margin: 0px;height:100%;"></div>');
	$("#lastOverview").hide();


	this.hide = function(){
		$("#lastOverview").hide();
}
	this.show = function(){
		$("#lastOverview").show();
}

this.overviewMenu = function(finalMenu, totalPrice, numGuest){
		$("#lastOverview").empty();
		$("#lastOverview").show();
		$("#lastOverview").append('<div id="overview" class="col-xs-12 col-sm-12 col-md-12" style="vertical-align: top;text-align: center;margin: 0 auto;"><div id="mainContent" class="col-md-6"><h1 id="headerContent">My dinner: '+numGuest+' people</h1></div><button id="back2" type="button" class="btn btn-warning btn-responsive back" style="">Go back and edit dinner</button></div>');
		var count = 0;
	    var str = "";
        
		for(var x in finalMenu){
			console.log(finalMenu[x]);
				if(finalMenu[x] == null || finalMenu[x] == "undefined" || finalMenu[x] == ""){
					continue;
				}
			str += '<div class="col-xs-3 col-sm-3 col-md-3 " style="vertical-align: top;text-align: center;margin: 0 auto;"><div style="margin:0 auto;width: 180px;"><div style="background-color:grey;display: table;margin:0 auto;"><div style="overflow: hidden;width: 180px;"><image class="img-thumbnail " src="images/' + finalMenu[x].image + '" style="height:180px;width: 180px;"></image></div><h3 class="" style="">' + finalMenu[x].name + '</h3></div><p style="text-align: left;width: 180px;">' + finalMenu[x].description + '</p></div></div>';
		}

		$("#lastOverview").append(str);
		$("#lastOverview").append('<div class="col-xs-3 col-sm-3 col-md-3 " style="vertical-align: top;text-align: center;margin: 0 auto;"><p>Total Price: '+ totalPrice +'</p></div>');
		$("#lastOverview").append('<div id="buttonDiv" class="col-xs-12 col-sm-12 col-md-12" style="text-align: center;"><button id="fullRecipe" type="button" class="btn btn-warning btn-responsive back" style="">Go to full recipe</button></div>');

	}

}
