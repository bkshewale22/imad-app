var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articals={
'artical-one' :{
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
    
},
'artical-two': {
    title:'artical Two',
    cont:`<p>
            this is my second artical page
            </p>`,
    hed: 'this second artical',
    date: 'feb 29,2018'  
    
    },
'artical-three':{
    title:'artical Three',
    cont:`<p>
            This is my Third artical
            </p>
            `,
    hed: 'this Three artical',
    date: 'feb 30,2018'
    
}
};
function CreateTemlate(data){
    var title=data.title;
    var hed=data.hed;
    var date=data.date;
    var cont=data.cont;
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
app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
   res.send(CreateTemlate(articals[articleName]));
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
