var selectDishView = function(container){
	this.cnt = container;
	this.cnt.append ('<div class="col-xs-7 col-sm-9 col-md-9" id="selectDishView" style="height:100%;">'+
					'<div style="height:20%;background-color: rgba(246, 178, 107, 0.7);">'+
					'<h3 style="margin-left: 10px;margin-right: 20px;border-bottom: solid 1px;">SELECT DISH</h3>'+
					'<form class="form-inline">'+
					'<div class="form-group" style="margin-left: 10px;">'+
					'<div class="form-group col-xs-4" style="padding: 0px;">'+
					'<input id="searchInput" class="form-control" type="text" style="padding: 0px;position:relative;float:right;margin-right: 0px;margin-left: 100px; width: 100%;">'+
					'</div>'+
					'<div class="form-group col-xs-4" style="padding: 0px;">'+
					'<button id="searchButton" type="button" class="btn btn-warning btn-responsive" style="paddin: 0px;">Search</button>'+
					'</div>'+
					'<div class="form-group col-xs-4" style="padding: 0px;">'+
					'<select class="form-control" id="selectInput" style="margin-right: 20px; width: 100px;">'+
					'<option value="starter">Starter</option>'+
					'<option value="main dish">Main</option>'+
					'<option value="dessert">Dessert</option>'+
					'</select>'+
					'</div>'+
					'</div>'+
					'</div>'+
					'<form>'+
					'<div class="col-xs-9 col-sm-9 col-md-9 pull-right" id ="viewDishes" style="height:80%;">'+
					'</div>'+
					'</div>');

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
		

		for(var x in dish){
			if(!isNaN(x)){		
				listName.push(dish[x].name);
				listDescription.push(dish[x].description);
				listImage.push(dish[x].image);
			}
		}


		for(x in listName){
			//$("#viewDishes").append('<div class="col-xs-2 col-sm-2 col-md-2" id="selectbox"></div>');
			$("#viewDishes").append('<div class="col-xs-3 col-sm-3 col-md-3" id="selectbox'+x+'"></div>');
			}

		for(y in listImage){
			$("#selectbox"+y+"").append('<image src="images/'+listImage[y]+'" style="width:100%;height:100px;"></image><br>');
			}

		for(z in listName){
			$("#selectbox"+z+"").append('<p id="selectText">"' + listName[z] + '"</p><br>');
			}

		for(w in listDescription){	
			$("#selectbox"+w+"").append('<p id="selectText">"' + listDescription[w] + '"</p><br>');
			}

	}
}