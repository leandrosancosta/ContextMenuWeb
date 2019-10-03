menu(e){
	var top = e.pagey //- element.offset
	var left = e.pageX //- element.offset
	
	$('#context-menu').css({
		display: "block",
                top: top,
                left: left
            }).addClass("show");
	})
	
	//outclick $("#menu-machine").removeClass("show").hide();
}