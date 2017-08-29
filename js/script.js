$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");
});

$(document).ready(function(){
	$("#counter").countdown({
	until: new Date(2017, 08 - 1, 30, 0), // (YEAR, month-1 (08-1 = Aug), day, hours)
	format: 'dHMS'
	});

	$("#counter_wrapper").fitText(1.2, {
	minFontSize: '20px',
	maxFontSize: '50px'
	});
});