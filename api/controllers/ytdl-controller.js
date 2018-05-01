'use strict';

const shell = require('shelljs');

exports.get_video = function(req, res) {

	const user = req.query.user;
	const video_url = req.query.video_url;

	shell.exec('api/dl_script ' + video_url + ' ' + user);
	
	const {stdout, stderr, code} = shell.exec('api/gm_script ' + user);

	const songs = stdout.split(/[\r\n]+/);


	var response = {
		url: "http://35.196.94.8:3000/",
		user: user,
		songs: songs
	}

	res.jsonp(response);
};
