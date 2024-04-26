	

	$('#hamburger_menu').click(function(){
		$('#media_menu').toggle(1000);
	});
/*
	$('#reg_form').on('submit', function(e){
		e.preventDefault();
		let attr = $('#first_name').attr('type');
		console.log(attr)
	});

	
$('#reg_form').on('submit', function(e){
	e.preventDefault();
	let firstName = $('#first_name').val();
	alert(firstName);
});

	$(document).ready(function(){
		let boxText = $('.box').html();

		console.log(boxText);
	});

*/
/*
$(document).ready(function(){
	$('.box').html('I love <i>Web Development Curse,</i> Its amaizing');
});



	$(document).ready(function(){
		//$('.box').toggle('slow');
		//$('.box').animate({top: '60%', height: '300px', width: '450px', color: 'green'});

		$('.box').hide(1000);alert('Box Hidden!');
		
	});


	$(document).ready(function(){
		$('.box').hide(2000)
		.show(2000)
		.fadeOut(2000)
		.fadeIn(2000)
	});
	


$('#add').click(function(){
	$('p').add();
});




$(document).ready(function(){
	$('.box').html('This is <i>another new</i> Box');
});



$('#add').click(function(){
	$('.para1').prepend('This is another paragraph');
});



$('#change').click(function(){
	var dimension = $('.change_box').width();
	console.log(dimension);
});
*/

$('#change').click(function(){
	$('.sample_box').toggleClass('change_color');
});


function validate_input(){
	var box = document.getElementById("fname");

	if(box.value == "")
	{
		alert('You must enter atleast one character in the name field');
		return false;
	}
}