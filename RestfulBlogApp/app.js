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
  res.render("index"); 
})

// app.get("./partials/header", function(req, res){
//   console.log("hello");
// })


 
app.get("/staff", function(req, res){
  res.render("staff");
})

app.get("/news/1", function(req, res){
  con.query("SELECT * FROM news ORDER BY newsid desc LIMIT 5", function (err, result, fields) {
    con.query("SELECT * FROM notification" , function (err, result2, fields) {
     res.render("news",  {result: result, result2: result2} );
    })
  })
})



app.get("/videos", function(req, res){
  con.query("SELECT * FROM videos ORDER BY videoid desc", function (err, result, fields) {
    // console.log(result[2]);

     //res.render("index", {result: result[0].uid});
     //res.send("result");
     res.render("videos",  {result: result} );

  })
})

app.get("/volunteers", function(req, res){
  res.render("volunteers");
})

app.get("/contacts", function(req, res){
  res.render("contacts");
})

//GET BACK TO ATER.
app.get("/news/:id", function(req, res){
  console.log(req.params.id);
  var firstboundary = 5 * (req.params.id - 1);
  console.log(firstboundary);
  var lastboundary  = 5 * req.params.id;
  con.query("SELECT * FROM news ORDER BY newsid desc LIMIT " + firstboundary + " , " + lastboundary, function (err, result, fields) {
    //console.log(result[2]);

     //res.render("index", {result: result[0].uid});
     //res.send("result");
     res.render("news",  {result: result} );

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



// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

var test = con.query("SELECT * FROM notification" , function (err, result, fields) {
  console.log(result[0].notificationmessage);
  //return result[0];

})
//console.log(test);