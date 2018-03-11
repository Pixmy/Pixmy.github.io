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
    
    //gallery click
    $(".column div").on("click", function(){
        $('body').attr('style','overflow-y:hidden;');
        var imgUrl = $(this).attr("style");
        var String=imgUrl.substring(imgUrl.lastIndexOf("('")+2,imgUrl.lastIndexOf("')"));
        $(".galleryModal img").attr("src", String);
        $(".galleryModal").fadeIn();
    });
    
    $('.galleryClose').on("click", function(event){
        $(".galleryModal").fadeOut();
        event.stopPropagation();
        $('body').removeAttr('style');
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
    
    $('.funcionClose').on("click", function(event){
        $(".funcionModal").fadeOut();
        event.stopPropagation();
        $('body').removeAttr('style');
    });
    
    
    //click sobre funcion
    $(".funcion").on("click", function(){
        
        $('body').attr('style','overflow-y:hidden;');
        var title = $(this).children(".titulo").text();
        $(".fnctitulo").text(title);
        
        var id = $(this).attr('id');
        if(id == "malasPalabras"){
            $(".ds").hide();
            $(".mp").show();
        }else{
            $(".mp").hide();
            $(".ds").show();
        }
        
        $(".funcionModal").fadeIn();
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
        var ch = 0;

        $( ".titulo" ).each(function( index ) {
                var a = $(this).height();
                if(a > h){
                    h = a;
                }
            }
        );
            $( ".fecha" ).each(function( index ) {
                var b = $(this).height();
                if(b > ch){
                    ch = b;
                }
            }
        );

            $( ".fecha" ).each(function( index ) {
                var b = $(this).height();
                 if(b != ch){
                    $(this).attr("style","height:"+ch+"px;");
                  }
            });

        $( ".titulo" ).each(function( index ) {
                var a = $(this).height();
                 if(a != h){
                    $(this).attr("style","height:"+h+"px; line-height:"+h+"px;");
                  }
            });
    }, 70);
	
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


function addFuncion(autor, titulo, cartel, precio, fecha){

	$(".funciones").append('<div class="funcion"><div class="left-circle"></div><div class="center-circle"></div><div class="right-circle"></div><p class="autor">'+ autor +'</p><p class="titulo primary">'+ titulo +'</p><div class="portada" style="background-image: url('+ cartel +');"></div><div class="info"><div class="precioText">Precio</div><div class="fechaText">Fecha</div></div><div class="datos"><div class="precio primary">$'+ precio +'</div><div class="fecha"><span class="primary">'+ fecha +'</span></div></div><div class="dash"><div class="left-circle-bottom"></div><div class="right-circle-bottom"></div></div><div class="codigo"><p class="inf">M&nbsp;&nbsp;Á&nbsp;&nbsp;S&nbsp;&nbsp;&nbsp;&nbsp;I&nbsp;&nbsp;N&nbsp;&nbsp;F&nbsp;&nbsp;O&nbsp;&nbsp;R&nbsp;&nbsp;M&nbsp;&nbsp;A&nbsp;&nbsp;C&nbsp;&nbsp;I&nbsp;&nbsp;Ó&nbsp;&nbsp; N</p><img src="https://image.ibb.co/gwzj2c/barras.png"></div></div>');
}
