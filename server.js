var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articalOne ={
    title:'artical one',
    cont:`<p>
            this is my first contant of web app.this is my first contant of web app.this is my first contant of web app.this is my first contant of web app.this is my first contant of web app.this is my first contant of web app.this is my first contant of web app.this is my first contant of web app.this is my first contant of web app.this is my first contant of web app.
            </p>
        <p>
            this is my first contant of web app.this is my first contant of web app.this is my first contant of web app.this is my first contant of web app.this is my first contant of web app.this is my first contant of web app.this is my first contant of web app.this is my first contant of web app.this is my first contant of web app.this is my first contant of web app.
        </p>
        <p>
            this is my first contant of web app.this is my first contant of web app.this is my first contant of web app.this is my first contant of web app.this is my first contant of web app.this is my first contant of web app.this is my first contant of web app.this is my first contant of web app.this is my first contant of web app.this is my first contant of web app.
        </p>`,
        hed: 'this first artical',
        date: 'feb 28,2018'
    
};
function CreateTemlate(data){
    var title=data.title;
    var had=data.had;
    var date=data.date;
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
        ${hed}
    </h3>
    <div>
        ${date}
    </div> 
    <div>
        ${cont}
    </div>
    </div>
  </body>
</html>
`;
  return htmlTem;  
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/artical-1',function(req,res){
   res.send(CreateTemlate(articalOne));
});
app.get('/artical-2',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'artical-2.html'));
});
app.get('/artical-3',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'artical-3.html'));
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
