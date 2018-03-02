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
    
    //click sobre menu para que scroll
    $('a[href*=\\#]').on('click', function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top - 50}, 1000);
    });
    
    //menu highlight
    $(".menu ul li").on("click", function(){
        $(this).addClass("activeLi");
        setTimeout(function() {
            $(".menu ul li").removeClass("activeLi");
        }, 1000, this);                    
    });
    
    $(".menuMob ul li").on("click", function(){
        $( ".bars svg" ).attr("class","fas fa-bars");
        $( ".menuMob" ).hide("fast");
    });
    
    //click sobre persona
    $('.person').on("click", function(){
        $(this).addClass("activePerson");
        $('body').attr('style','overflow-y:hidden;');
    });
    
    $('.personClose').on("click", function(event){
        $('.activePerson').removeClass("activePerson");
        event.stopPropagation();
        $('body').removeAttr('style');
    });
    
    //click sobre informacion cruzada
    $('.ct2 button').on("click", function(){
        $(this).closest('.cruzada').addClass('activeCruzada');
        $('body').attr('style','overflow-y:hidden;');
    });
    
    $('.cruzadaClose').on("click", function(event){
        $('.activeCruzada').removeClass("activeCruzada");
        event.stopPropagation();
        $('body').removeAttr('style');
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
