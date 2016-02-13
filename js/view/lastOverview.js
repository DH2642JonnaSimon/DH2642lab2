//ExampleView Object constructor
var lastOverview = function (container) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	this.cnt = container;
	this.cnt.append ('<div id="lastOverview" class="col-xs-12 col-sm-12 col-md-12"></div>');
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

		$("#lastOverview").append('<div id="buttondiv" class="col-xs-12 col-sm-12 col-md-12" style="vertical-align: top;text-align: center;margin: 0 auto;"><div id="buttondivBackground" style="background-color: rgba(246, 178, 107, 0.7);padding: 10px 10px 10px 10px;"><div id="mainContent" class="col-md-6"><h1 id="headerContent">My dinner: '+numGuest+' people</h1></div><button id="back2" type="button" class="btn btn-warning btn-responsive back" style="">Go back and edit dinner</button></div></div>');
		var count = 0;
	    var str = '<div class="row"><div class="col-xs-9 col-sm-9 col-md-9"><div class="row">';
        
		for(var x in finalMenu){
			console.log(finalMenu[x]);

			if(finalMenu[x] == null || finalMenu[x] == "undefined" || finalMenu[x] == ""){
				count++;
				continue;
			}

			str += '<div class="col-xs-4 col-sm-4 col-md-4" style="vertical-align: top;text-align: center;margin: 0 auto;"><div style="margin:0 auto;width: 180px;"><div style="background-color:grey;display: table;margin:0 auto;"><div style="overflow: hidden;width: 180px;"><image class="img-thumbnail " src="images/' + finalMenu[x].image + '" style="height:180px;width: 180px;"></image></div><h3>' + finalMenu[x].name + '</h3></div><p style="text-align: left;width: 180px;"> Price:' + prices[count] + '</p></div></div>';
			count++;
		}
/*
<div row>
 	<div 9>
 	<div row>
 		<div 4></div>
 		<div 4></div>
 		<div 4></div>
 	</div>
 	</div>
 		<div 3>
 		</div>
</diV>*/	
		str += '</div></div><div class="col-xs-3 col-sm-3 col-md-3 " style="vertical-align: top;text-align: center;margin: 0 auto;"><p>Total Price: '+ totalPrice +'</p></div></div>';

		$("#lastOverview").append(str);
		$("#lastOverview").append('<div id="buttonDiv" class="col-xs-12 col-sm-12 col-md-12" style="text-align: center;"><button id="fullRecipe" type="button" class="btn btn-warning btn-responsive back" style="">Go to full recipe</button></div>');
		

	}

}
