//ExampleView Object constructor
var startView = function (container) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.cnt = container;
	
	
	this.cnt.html('<div id="startView" class = "well well-lg"><h2 style="border-bottom: solid 1px;">A Home Dinner Service</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><div id="buttonInWell" style="margin-bottom: 20px:">Start Quickly:<br><button id="newDinner" type="button" class="btn btn-warning btn-responsive">Create new dinner</button></div></div>');

	this.hide = function(){
		$("#startView").hide();
	}
}
 
