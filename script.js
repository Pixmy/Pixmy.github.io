$( document ).ready(function() {
	//menu on click
	var toggle = 0;
	$( ".bars" ).on('click', function(){
		if(toggle == 0){
			toggle=1;
			$( ".bars svg" ).attr("class","fas fa-times");
			$( ".menuMob" ).show("fast");
		}else{
			toggle=0;
			$( ".bars svg" ).attr("class","fas fa-bars");
			$( ".menuMob" ).hide("fast");
		}
	});

	//galeria
	var widthPhoto = $(".principalPhoto img").width();
	$(".secondaryPhoto").css("width", widthPhoto + "px");
	if ($(window).width() < 768) {
		$(".galeria").show();
		$(".gallery").hide();
	}else{
		$(".galeria").hide();
		$(".gallery").show();
	}


	//height de boletos
	setTimeout(function(){ 
	var h = 0;
	$( ".titulo" ).each(function( index ) {
	  		var a = $(this).height();
			if(a > h){
				h = a;
			}
		}
	);

	$( ".titulo" ).each(function( index ) {
			var a = $(this).height();
			 if(a != h){
			 	$(this).attr("style","height:"+h+"px; line-height:"+h+"px;");
			  }
		}
	); }, 70);
	
});

$( window ).resize(function() {
  	var widthPhoto = $(".principalPhoto img").width();
	$(".secondaryPhoto").css("width", widthPhoto + "px");

	if ($(window).width() < 768) {
		$(".galeria").show();
		$(".gallery").hide();
	}else{
		$(".galeria").hide();
		$(".gallery").show();
	}
});
