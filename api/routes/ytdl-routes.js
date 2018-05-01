'use-strict';
module.exports = function(app){
	var ytdl = require('../controllers/ytdl-controller');
	
	app.route('/get_video')
		.get(ytdl.get_video)

};
