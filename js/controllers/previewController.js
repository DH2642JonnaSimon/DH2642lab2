var previewController = function(mc, model, view){
	this.mainController = mc;
	this.view = view;

	$("#confirm").click(function() {
		mc.confirmDish();
	});
	
	$("#back").click(function() {
	    mc.denyDish();
	});

	$(document).on('click', '#tryAgain2', function(event) { 
      $("body").css("background-image", "none")
      model.getDish(view.DID);
   });
}