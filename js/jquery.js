$(document).ready(function() {
	
	$(".imgLiquidFill").imgLiquid();	  
	  
	$(window).on('resize', function (event) { 
	    if ($(window).width() <= 1000) {   
	        $('.block-locale').hide().fadeOut(250);
	} else {
	    $('.block-locale').hide().fadeIn(250);
	    }
	});
	
	$(".dropdown-toggle").dropdown();
	
	
	$(".social-icons,.links").find( "a" ).each(function () {
		 $(this).mouseover(function() {
	            $(this).css("color","#D52133" );
	        });
		 $(this).mouseout(function () {
	            $(this).css("color","#FFF"); 
	        });	
		 
		 });
	
	
	
	
	$(".bars").mouseover(function() {
        $(this).css("color","black" );
	 }).mouseout(function () {
         $(this).css("color","white"); 
     });	 
	 
	 $('.dropdown-submenu a.test').on("click", function(e){
		    $(this).next('ul').toggle();
		    e.stopPropagation();
		    e.preventDefault();
		  });
	
	
	
	
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	

	});
	
	  
     