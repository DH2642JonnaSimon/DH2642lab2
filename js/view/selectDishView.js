var selectDishView = function(container, model){
	this.cnt = container;
	this.cnt.append ('<div id="selectDishView" class="col-xs-7 col-sm-9 col-md-9"><div id="selectDishBackground"><h3 id="selectDishHeader">SELECT DISH</h3><table class="table-responsive table-condensed" id="selectDishTable"><tr><td id="searchInputCell"><input id="searchInput" placeholder="Enter key words" class="form-control " type="text"></td><td id="searchButtonCell"><button id="searchButton" type="button" class="btn btn-warning btn-responsive">Search</button></td><td id="selectCell"><select class="form-control" id="selectInput"><option value="appetizer">Starter</option><option value="main%20dish">Main</option><option value="dessert">Dessert</option></select></td></tr></table></div><div id ="viewDishes" class="pre-scrollable"></div></div>');
	model.addObserver(this);
	$("#selectDishView").hide();

	this.show = function(){
		$("#selectDishView").show();
		$("#viewDishes").css("height", $("#selectDishView").height()-$("#selectDishBackground").height()-10);

	}


	this.hide = function(){
		$("#selectDishView").hide();
	}

	this.updateFunction = function(data){
		if(data =="undefined" || data== null || data==""){
			return;
		}
		$("#viewDishes").css("height", $("#selectDishView").height()-$("#selectDishBackground").height()-10);


		var listId =[];
		var listName =[];
		var listDescription =[];
		var listImage =[];
		var count = 0;
        var str = "";
        var dish = data;
        str += "<div class='table' id='viewDishesInner'>";
		for(var x in dish){
			if(!isNaN(x)){
			    if(count == 0){
			        str += "<div class='row' id='rowViewDish'>";
			    }
				str += '<div class="col-xs-12 col-sm-12 col-md-3" id="dishDiv"><div id="innerDishDiv"><div id="' +dish[x].RecipeID + '" class="clickableDish" style="background-color:#fff;display: table;margin:0 auto;height:180px;"><div style="overflow: hidden;width: 180px;"><image class="img-thumbnail" id="imgElem" src="'+ dish[x].ImageURL + '"></image></div></div><div id="dishHeaderDiv"><h3 id="dishHeader">' + dish[x].Title + '</h3></div><p id="dishParagraph">' + dish[x].StarRating + '</p></div></div>';
/*				if (dish[x].StarRating >=4){
					$("#dishParagraph").append('<image id="" src="/images/grp-gripimage-1a6dac.png"></image>');
				}*/
				count++;
				if(count == 4){
				    str +="</div>";
				    count = 0;
				}
			}
		}
		
		if(count != 0){
		    for(var i = count; count != 4; count++){
		        str += "<div><div></div></div>";
		    }
		    str += "</div>";
		}
		
		str += "</table></div>";
		$("#viewDishes").append(str);
		

	}
	
	
	$(document).ready(function() {
	    $(window).resize(function(){
			$("#viewDishes").css("height", $("#selectDishView").height()-$("#selectDishBackground").height() - 10);
		});
	});

}