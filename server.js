var express= require('express');
var morgan = require('morgan');
var Pool   = require('pg').Pool;
var config ={
    
    user: 'bkshewale',
    database:'bkshewale',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
};
var path = require('path');
var app = express();
app.use(morgan('combined'));


function CreateTemlate(data){
    var title=data.title;
    var Header =data.Header ;
    var date=data.date;
    var Contant=data.Contant;
var htmlTem =`
        <html>
 <head>
    ${title}
     <link href="/ui/style.css" rel="stylesheet" />
   
</head>
  <body>
      <div class="container">
    <div>
        <a href="/">Home</a>
    </div>
    <hr/>
    <h3> 
        ${Header}
    </h3>
    <div>
        ${date}
    </div> 
    <div>
        ${Contant}
    </div>
    </div>
  </body>
</html>
`;
  return htmlTem;  
}

var pool = new Pool(config);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/shewale/balaji',function(req,res){
    
    pool.query("SELECT * FROM art WHERE title ='balaji'" , function(err,result){
        
       /* if(err){
            res.status(500).send(err.toString());
        }else if(res.rows.length === 0){
            res.status(404).send('Artical not found');
        }else*/ {
            var ArticalData = result.rows[0];
            res.send(CreateTemlate(ArticalData));
        }
        
        
    });
   
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});




// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
