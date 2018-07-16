var express = require('express');
var app = express();
var bp = require('body-parser');

var user = {
		login: "max",
		mdp: "xxx",
			};

app.use(bp.urlencoded({extended: false }));

app.use('/',express.static(__dirname + '/public'));

app.post('/auth',function (req,res)
{
	var log=req.body.login;
	var md=req.body.mdp;
			// console.log(req.body.login);
			// console.log(req.body.mdp);
			// console.log(user.login);
			// console.log(user.mdp);
   if ( log=== user.login && md === user.mdp)
    {
		console.log('ok');
	}else
	{
		console.log('error');
		//myaccount.html
	}
})

app.listen(3300, function () 
{
  console.log('Example app listening on port 3300!')
});
