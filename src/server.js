var express = require('express');
var method_override = require('method-override');
var body_parser = require('body-parser');
var port = process.env.PORT || 3000;

var app = express();

app.use('/lib', express.static(__dirname + '/public/lib'));
app.use('/elements', express.static(__dirname + '/public/elements'));
app.use('/public', express.static(__dirname + '/public'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));
app.use(method_override());

require('./routes')(app);

app.listen(port, function(){
	console.log('Server running on port:\t%d', port);
});