'use strict';
var multer = require('multer');
var upload = multer( { dest: 'uploads/' });

var path = process.cwd();

module.exports = function (app, passport) {

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});
	app.post('/api/fileanalyze', upload.single('upl'), function(req, res) {
		res.writeHead( 200, {
			"Content-Type": "text/html"
		});
		res.write('Your file <b>' + req.file.originalname + '</b> is <b>' + req.file.size + '</b> bytes.');
		res.write('<br> Return <a href="https://freecodecamp-metadata-microservice-will-is-coding.c9users.io">home</a> to check another file\'s size');
		res.end();
	});
};
