// Link for multiple sql statements renders
//https://stackoverflow.com/questions/17100682/how-to-render-multiple-result-from-mysql-query-on-the-same-ejs-file-on-node-js

// To read how to use data from a json file
//https://stackabuse.com/reading-and-writing-json-files-with-node-js/

//INSTALL THE FOLLOWING WHEN ADDING THE APPLICATION ONLINE.
//apache
//phpmyadmin
//node
//node install npm
//npm install express --save
//npm install ejs -- save
//npm install mysql --save

//To run the application type node app.js


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
// 

// app.get("/data", function(req, res){
//   res.render("index", data.artist[0]); 
// })


app.get("/", function(req, res){
  con.query("SELECT * FROM notification" , function (err, result2, fields) {
  res.render("index", {result2: result2}); 
})
})

 
app.get("/staff", function(req, res){
  con.query("SELECT * FROM staff", function (err, resp, fields) {
  con.query("SELECT * FROM notification" , function (err, result2, fields) {
  res.render("staff", {result: resp, result2: result2});
})
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
  //console.log(req.params.id);
  var firstboundary = 5 * (req.params.id - 1);
 // console.log(firstboundary);
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


//Read more about a specific newstitle
app.get("/news/readmore/:id", function(req, res){
  con.query("SELECT * FROM news ORDER where newsid", function (err, result, fields) {
    con.query("SELECT * FROM notification" , function (err, result2, fields) {
            res.render("show",  {result: result, result2: result2} );
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

// Testing JSON Data
////////////////////
/////////////////////
var fs = require('fs');

app.get('/json', (req, res) => {
  con.query("SELECT * FROM notification" , function (err, result2, fields) {

  fs.readFile('./data/artists.json', (err, data2) => {  
    if (err) throw err;
    let data = JSON.parse(data2);
    // console.log(student[0].first_name);

    res.render('json', {data: data, result2: result2})
  });
})
})
////////////////////
/////////////////////

app.get("/events", (req, res) => {
  con.query("SELECT * FROM notification" , function (err, result2, fields) {
res.render("events", {result2:result2});
  })
})


app.get("/feedback", (req, res) => {
  con.query("SELECT * FROM notification" , function (err, result2, fields) {
res.render("feedback", {result2:result2});
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

