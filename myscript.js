$(document).ready(function(){
	var now = new Date;
	var deadline = new Date(2013,0,5);
	var days = diffDays(now,deadline);
	
	$('<p id="date"></p>').appendTo('body');
	//$('<p id="time"></p>').appendTo('body');
	$('#date').text('距离2013年考研还有'+days+'天');
	//$('#time').text(now.toLocaleTimeString());
});

function diffDays(predate, olddate){
	var diff = olddate - predate;
	var days = diff/1000/60/60/24;
	return days.toFixed();
}
