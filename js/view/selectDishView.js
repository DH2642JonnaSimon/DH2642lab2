var selectDishView = function(container, model){
	this.cnt = container;
	this.cnt.append ('<div id="selectDishView" class="col-xs-7 col-sm-9 col-md-9"><div id="selectDishBackground"><h3 id="selectDishHeader">SELECT DISH</h3><table class="table-responsive table-condensed" id="selectDishTable"><tr><td id="searchInputCell"><input id="searchInput" placeholder="Enter key words" class="form-control " type="text"></td><td id="searchButtonCell"><button id="searchButton" type="button" class="btn btn-warning btn-responsive">Search</button></td><td id="selectCell"><select class="form-control" id="selectInput"><option value="appetizer">Starter</option><option value="main%20dish">Main</option><option value="dessert">Dessert</option></select></td></tr></table></div><div id ="viewDishes" class="pre-scrollable"><div class="table" id="viewDishesInner"></div></div></div>');
	model.addObserver(this);
	$("#selectDishView").hide();

	this.show = function(){
		$("#selectDishView").show();
		var height = 0;
		$('.dishHeadDiv').each(function() {
			if(height < $(this).height()){
				height = $(this).height();
			}
		});
		$('.dishHeadDiv').css('height', height+10);
		console.log(height);
	
		$("#viewDishes").css("height", $("#selectDishView").height()-$("#selectDishBackground").height()-10);

	}

	this.showDeny = function(){
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
		console.log(data);

		var listId =[];
		var listName =[];
		var listDescription =[];
		var listImage =[];
		var count = 0;
        var str = "";
        var dish = data;
        str += "";
		for(var x in dish){
			if(!isNaN(x)){
			    if(count == 0){
			        str += "<div class='row' id='rowViewDish'>";
			    }
			    console.log(dish[x].ImageURL);
				str += '<div class="col-xs-12 col-sm-12 col-md-3" id="dishDiv"><div id="innerDishDiv"><div id="' +dish[x].RecipeID + '" class="clickableDish" style="background-color:#fff;display: table;margin:0 auto;height:180px;"><div style="overflow: hidden;width: 180px;"><image class="img-thumbnail" id="imgElem" src="'+ dish[x].ImageURL + '"></image></div></div><div id="dishHeaderDiv" class="dishHeadDiv"><h3 id="dishHeader">' + dish[x].Title + '</h3></div><p id="dishParagraph">' + dish[x].StarRating + '</p></div></div>';
				count++;
				if(count == 4){
				    str +="</div>";
				    count = 0;
				}
			}
		}
		
		str += "";
		$("#viewDishes").append(str);

		var height = 0;
		$('.dishHeadDiv').each(function() {
			if(height < $(this).height()){
				height = $(this).height();
			}
		});
		if(height != 0){
			$('.dishHeadDiv').css('height', height+10);
		}
	}


	
	$(document).ready(function() {
	    $(window).resize(function(){
			$("#viewDishes").css("height", $("#selectDishView").height()-$("#selectDishBackground").height() - 10);
		});
	});

}