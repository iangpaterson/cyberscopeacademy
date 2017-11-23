$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");
});

$(document).ready(function(){
	$("#counter").countdown({
	until: new Date(2017, 12 - 1, 18, 7), // (YEAR, month-1 (06-1 = Jun), day, hours)
	format: 'dHMS'
	});

	$("#counter_wrapper").fitText(1.2, {
	minFontSize: '20px',
	maxFontSize: '50px'
	});
});