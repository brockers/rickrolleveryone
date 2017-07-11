var chromecasts = require('chromecasts')()

chromecasts.on('update', function(player){
	console.log('all players: ', chromecasts.players);
	player.play('http://www.ai-sys.com/linux/NeverGonnaGiveYouUp.mp4', {title: "Rick Roll", type: "video/mp4"});
});
