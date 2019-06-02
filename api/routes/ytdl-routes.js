'use-strict';
module.exports = function(app){
	var ytdl = require('../controllers/ytdl-controller');
	
	app.route('/get_video')
		.get(ytdl.get_video)

	app.route('/get_all_videos')
		.get(ytdl.get_all_videos)

};
