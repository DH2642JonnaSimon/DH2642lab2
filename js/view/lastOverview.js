//ExampleView Object constructor
var lastOverview = function (container) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	this.cnt = container;
	this.cnt.append ('<div id="lastOverview" class="col-xs-7 col-sm-9 col-md-9" style="margin: 0px;height:100%;"></div>');
	$("#lastOverview").hide();

	this.hide = function(){
		console.log("banan1");
}
	this.show = function(){
		console.log("banan2");
}

this.overviewMenu = function(finalMenu){
	console.log(finalMenu);

		var count = 0;

	    var str = "";
        
        str += "<div id='finalMenu' style='margin: 0px;'>";
		for(var x in finalMenu){
			console.log(finalMenu[x]);
			if(finalMenu[x] == null || finalMenu[x] == "undefined" || finalMenu[x] == ""){
				continue;
			}
			str += '<div class="col-xs-4 col-sm-4 col-md-4 " style="vertical-align: top;text-align: center;margin: 0 auto;"><div style="margin:0 auto;width: 180px;"><div id="' + finalMenu[x].id + '" class="clickableDish" style="background-color:grey;display: table;margin:0 auto;"><div style="overflow: hidden;width: 180px;"><image class="img-thumbnail " src="images/' + finalMenu[x].image + '" style="height:180px;width: 180px;"></image></div><h3 class="" style="">' + finalMenu[x].name + '</h3></div><p style="text-align: left;width: 180px;">' + finalMenu[x].description + '</p></div></div>';
		}

		$("#lastOverview").append(str);


}

}
