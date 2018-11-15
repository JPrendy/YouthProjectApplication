// Link for multiple sql statements renders
//https://stackoverflow.com/questions/17100682/how-to-render-multiple-result-from-mysql-query-on-the-same-ejs-file-on-node-js


var express = require("express");
var app = express();
app.set("view engine", "ejs");  //allows the need not to set .ejs at the end of the file.
app.use(express.static("public")); //this allows access to the public directory
//create dynamic html templates with ejs
// remember to install ejs, mysql and express


// console.log(test);
//This accesses all calls
// app.all('*', function (req, res, next) {
//   console.log('Accessing the secret section ...')
//   next() // pass control to the next handler
//   con.query("SELECT * FROM notification ", function (err, result, fields) {
//     //console.log(result[2]);

//      //res.render("index", {result: result[0].uid});
//      //res.send("result");
//      //res.send("result");

//   })
// });
// import data from './data/artists.json'

// app.get("/data", function(req, res){
//   res.render("index", data.artist[0]); 
// })


app.get("/", function(req, res){
  con.query("SELECT * FROM notification" , function (err, result2, fields) {
  res.render("index", {result2: result2}); 
})
})

 
app.get("/staff", function(req, res){
  con.query("SELECT * FROM notification" , function (err, result2, fields) {
  res.render("staff", {result2: result2});
})
})

///
///
app.get("/test", function(req, res){
  // con.query("SELECT * FROM news ORDER BY newsid desc LIMIT 5", function (err, result, fields) {
    con.query("SELECT COUNT(newsid) as Test FROM news" , function (err, result2, fields) {
    //  res.render("test",  {result: result , result2: result2} );
    console.log(result2[0].Test);
    })
})
////
////


app.get("/news/1", function(req, res){
  con.query("SELECT * FROM news ORDER BY newsid desc LIMIT 5", function (err, result, fields) {
    con.query("SELECT * FROM notification" , function (err, result2, fields) {
     res.render("news",  {result: result,  result2: result2, totalNews: "ELSE"} );
  })
})
})

//GET BACK TO ATER.
app.get("/news/:id", function(req, res){
  console.log(req.params.id);
  var firstboundary = 5 * (req.params.id - 1);
  console.log(firstboundary);
  var lastboundary  = 5 * req.params.id;
  con.query("SELECT * FROM news ORDER BY newsid desc LIMIT " + firstboundary + " , " + lastboundary, function (err, result, fields) {
    con.query("SELECT * FROM notification" , function (err, result2, fields) {
      con.query("SELECT COUNT(newsid) as Test FROM news" , function (err, result3, fields) {
        if(result3[0].Test >= lastboundary ){
            res.render("news",  {result: result, result2: result2,  totalNews: "True"} );
        }else{
             res.render("news",  {result: result, result2: result2,  totalNews: "False"} );
 
        }
    }) 
  }) 
  }) 
})




app.get("/videos", function(req, res){
  con.query("SELECT * FROM videos ORDER BY videoid desc", function (err, result, fields) {
    con.query("SELECT * FROM notification" , function (err, result2, fields) {
     res.render("videos",  {result: result,  result2: result2} );
    })
  })
})

app.get("/volunteers", function(req, res){
  con.query("SELECT * FROM notification" , function (err, result2, fields) {
  res.render("volunteers", {result2: result2});
})
})

app.get("/contacts", function(req, res){
  con.query("SELECT * FROM notification" , function (err, result2, fields) {
  res.render("contacts",  {result2: result2});
})
})

const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("server is running");
});


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "schooldatabase"
});

