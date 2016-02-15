//ExampleView Object constructor
var lastOverview = function (container) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	this.cnt = container;
	this.cnt.append('<div id="lastOverview" class="col-xs-12 col-sm-12 col-md-12" style="vertical-align: top;text-align: center;margin: 0 auto;"><div id="mainContent" class="col-md-6"><h1 id="headerContent">My dinner: people</h1></div><button id="back2" type="button" class="btn btn-warning btn-responsive back" style="">Go back and edit dinner</button></div>');
	$("#lastOverview").hide();


	this.hide = function(){
		$("#lastOverview").hide();
}
	this.show = function(){
		$("#lastOverview").show();
}

this.overviewMenu = function(finalMenu, totalPrice, numGuest, prices){
		$("#lastOverview").empty();
		$("#lastOverview").show();
		$("#lastOverview").append('<div class="row"><div id="buttondiv" class="col-xs-12 col-sm-12 col-md-12"><div id="mainContent" class="col-xs-8 col-sm-8 col-md-8"><h1 id="headerContent">My dinner: '+numGuest+' people</h1></div><div class="col-xs-4 col-sm-4 col-md-4"><button id="back2" type="button" class="button back btn btn-warning btn-responsive">Go back and edit dinner</button></div></div></div>');
		var count = 0;
	    var str = '<div class="row"><div class="col-xs-9 col-sm-9 col-md-9" id="verticalLine"><div class="row">';
        
		for(var x in finalMenu){
			console.log(finalMenu[x]);

			if(finalMenu[x] == null || finalMenu[x] == "undefined" || finalMenu[x] == ""){
				count++;
				continue;
			}

			str += '<div class="col-xs-4 col-sm-4 col-md-4" style="vertical-align: top;text-align: center;margin: 0 auto;"><div style="margin:0 auto;width: 180px;"><div id="overviewPic"><div style="overflow: hidden;width: 180px;"><image class="img-thumbnail " src="images/' + finalMenu[x].image + '" style="height:180px;width: 180px;"></image></div><h3>' + finalMenu[x].name + '</h3></div><p class="oblique small white"> Price:' + prices[count] + '</p></div></div>';
			count++;
		}
	
		str += '</div></div><div class="col-xs-3 col-sm-3 col-md-3" id="TotPricePos" ><p class="oblique big red">Total Price: '+ totalPrice +'</p></div></div><hr>';

		$("#lastOverview").append(str);
		$("#lastOverview").append('<div id="buttonDiv2" class="col-xs-12 col-sm-12 col-md-12" style="text-align: center;"><button id="fullRecipe" type="button" class="btn btn-warning btn-responsive back medium-btn btn-block" style="">Go to full recipe</button></div>');
		

	}

}
