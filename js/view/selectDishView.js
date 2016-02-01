var selectDishView = function(container){
	this.cnt = container;
	this.cnt.append ('<div class="col-xs-7 col-sm-9 col-md-9" id="selectDishView" style="height:100%;"><div style="height:20%;background-color: rgba(246, 178, 107, 0.7);"><h3 style="margin-left: 10px;margin-right: 20px;border-bottom: solid 1px;">SELECT DISH</h3><form class="form-inline"><div class="form-group" style="margin-left: 10px;"><div class="form-group col-xs-4" style="padding: 0px;"><input id="searchInput" class="form-control" type="text" style="padding: 0px;position:relative;float:right;margin-right: 0px;margin-left: 100px; width: 100%;"></div><div class="form-group col-xs-4" style="padding: 0px;"><button id="searchButton" type="button" class="btn btn-warning btn-responsive" style="paddin: 0px;">Search</button></div><div class="form-group col-xs-4" style="padding: 0px;"><select class="form-control" id="selectInput" style="margin-right: 20px; width: 100px;"><option value="starter">Starter</option><option value="main dish">Main</option><option value="dessert">Dessert</option></select></div></div></div><form><div id ="viewDishes" style="height:80%;"></div></div>');

	$("#selectDishView").hide();

	this.show = function(){
		$("#selectDishView").show();
	}


	this.hide = function(){
		$("#selectDishView").hide();
	}

	this.selectDishes = function(dishes){
		//alert("Hejsan");
		var list = '';
		//var dish = JSON.parse(dishes);
		//var dish = JSON.stringify(dishes);
		//alert(dish);


		var dish = dishes;

		//console.log(dish.name);
		for(var x in dish){
			if(!isNaN(x)){
				console.log(dish[x].name);
			}
		}
		
		//console.log(dish[0].name);
	

		//var parsed = JSON.stringify(dish);
		//alert(parsed);
		

		//console.log();
		
		//$("#viewDishes").html(dish);
		//$("#viewDishes").html(dishes[0].name);

		//var json = '{"0":"1","1":"2","2":"3","3":"4"}';
/*
		var parsed = JSON.parse(dish);

		consol.log(parsed);

		var arr = [];

		for(var x in parsed){
 			 arr.push(parsed[x]);
			}
		console.log(arr);*/
		//bygg table med 3 kolumner för varje rad, lägg info om varje dish på ett snyggt sätt i cellerna

	}
}