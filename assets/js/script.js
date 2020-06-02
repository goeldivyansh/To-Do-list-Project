//CHECKING TODOS BY CLICKING
$("ul").on("click","li",function(){
	 $(this).toggleClass("completed");
});

//DELETING TODOS BY CLICKING ICON
$("ul").on("click","span",function(event){

	$(this).parent().fadeOut(300,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//TAKING NEW TODO AS INPUT
$("input[type='text']").on("keypress",function(event){

	if(event.which === 13)
	{
		//TAKING NEW TODO TEXT
		var todoText = $(this).val();
		$(this).val("");

		//CREATE NEW li AND ADD TO ul
		$("ul").append("<li><span class='glyphicon glyphicon-trash' aria-hidden='true'></span> " + todoText +"</li>");
	}
});


$(".glyphicon-plus").on("click",function(event){

	$("input[type='text']").fadeToggle("fast","linear");
});

