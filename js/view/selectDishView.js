var selectDishView = function(container){
	this.cnt = container;
	this.cnt.append ('<div id="selectDishView" class="col-xs-7 col-sm-9 col-md-9" style="margin: 0px;height:100%;"><div id="selectDishBackground" style="background-color: rgba(246, 178, 107, 0.7);padding: 10px 10px 10px 10px;"><h3 style="border-bottom: solid 1px;">SELECT DISH</h3><table class="table-responsive table-condensed"><tr><td style="padding-right: 0px;"><input id="searchInput" class="form-control " type="text" style="padding: 0px;margin-right: 0px;"></td><td style="padding-left: 0px;"><button id="searchButton" type="button" class="btn btn-warning btn-responsive" style="">Search</button></td><td><select class="form-control" id="selectInput"><option value="starter">Starter</option><option value="main dish">Main</option><option value="dessert">Dessert</option></select></td></tr></table></div><div id ="viewDishes" style=""></div></div>');

	$("#selectDishView").hide();

	this.show = function(){
		$("#selectDishView").show();
	}


	this.hide = function(){
		$("#selectDishView").hide();
	}

	this.selectDishes = function(dishes){
		$("#viewDishes").empty();

		var listId =[];
		var listName =[];
		var listDescription =[];
		var listImage =[];
		var dish = dishes;
		var count = 0;
        var str = "";
        
        str += "<div class='table pre-scrollable' id='andra' style='margin: 0px;'>";
		for(var x in dish){
			if(!isNaN(x)){
			    if(count == 0){
			        str += "<div class='row' style='margin-top:15px;'>";
			    }
				str += '<div class="col-xs-12 col-sm-12 col-md-3 " style="vertical-align: top;text-align: center;margin: 0 auto;"><div style="margin:0 auto;width: 180px;"><div id="' +dish[x].id + '" class="clickableDish" style="background-color:grey;display: table;margin:0 auto;height:280px;"><div style="overflow: hidden;width: 180px;"><image class="img-thumbnail " src="images/' + dish[x].image + '" style="height:180px;width: 180px;"></image></div><h3 class="" style="">' + dish[x].name + '</h3></div><p style="text-align: left;width: 180px;">' + dish[x].description + '</p></div></div>';
				count++;
				if(count == 4){
				    str +="</div>";
				    count = 0;
				}
			}
		}
		
		if(count != 0){
		    for(var i = count; count != 4; count++){
		        str += "<div style='20%'><div></div></div>";
		    }
		    str += "</div>";
		}
		
		str += "</table></div>";
		$("#viewDishes").append(str);
		


	}
}