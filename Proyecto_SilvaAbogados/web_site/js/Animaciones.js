$(document).ready(function(){


	// Slyder Principal
	
	// Variables
	var Slider = "div#Slider";
	var ClassSlider = "div.Slider";
	var NextSlider = "span.NextSlider";
	var BeforeSlider = "span.BeforeSlider";

	// Configuraciones
	var TiempoImg = 6000; // 6 SEGUNDOS PARA CAMBIO DE CADA IMAGEN

	function SizeSlider(){
		var WidthSlider = $(Slider).width();
		var HeightSlider = $(Slider).height();
		$(ClassSlider+" img").css("width",WidthSlider+"px");
		$(ClassSlider+" img").css("height",WidthSlider+"px");
	}

	SizeSlider();

	setInterval(function(){
		SizeSlider();
	},1000);
	

	function Slider_Next(){
        $(ClassSlider).animate({"margin-left": "0%"},1000,function(){
            $(ClassSlider+" span:last-child").insertBefore(ClassSlider+" span:first-child");
            $(ClassSlider).css("margin-left","-100%");
        });
    }

    function Slider_Before(){
        $(ClassSlider).animate({"margin-left": "-200%"},1000,function(){
            $(ClassSlider+" span:first-child").insertAfter(ClassSlider+" span:last-child");
            $(ClassSlider).css("margin-left","-100%");
        });
    }
    
    setInterval(function(){
        Slider_Next();
    },TiempoImg);

    // Controles
    $(NextSlider).on("click",function(){
    	Slider_Next();
    });

    $(BeforeSlider).on("click",function(){
    	Slider_Before();
    });


});