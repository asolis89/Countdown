$(document).ready(function()  {
	$('#countdown1').countdown1({ date: '09 June 2012 22:00:00' }, function() {
		$('#countdown1').text('This is the Game Changer!!');
		});
	});