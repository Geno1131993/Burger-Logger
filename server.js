var express = require("express");
var e_handlebars = require("express-handlebars");
var mysql = require("mysql");
var inquirer = require("inquirer");


var app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", e_handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");



var PORT = 8080;



//Set up connection to database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",

});



app.listen(PORT, function(){
    console.log(`Server listening on: http://localhost${PORT}`);
});


