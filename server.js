var path = require('path');
var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;


app.use(function(req, res, next){
	if(req.headers['x-forwarded-proto'] === 'https'){
		res.redirect('http://' + req.hostname + req.url)
	}else{
		next();
	}
});

app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function(req, res) {
  res.sendFile('index.html', { root: __dirname + '/public' });
});

app.listen(PORT,function(){
	console.log('Express server is un on PORT' + PORT);
});