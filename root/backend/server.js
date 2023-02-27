const mongoose = require("mongoose");
const express = require("express");  //framework used to create http web sever
const cors= require("cors");
const passport= require("passport");
const passportlocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");   //used to parse header to store data on the browser whenever session is established
const bcrypt = require("bcryptjs");
const expressSession = require("express-session");   //express session creates new memorystore instance to store  session data in a server
const bodyParser = require("body-parser");

const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors({
    origin: "http://localhost:3000",  //specify which origin can make requests to the server  (location of the react app)
    credentials: true
}));

app.use(expressSession({
    secret: "secretcode",   //used to authenticate session
    resave: true,
    saveUninitialized: true
}));

//whenever you call the secret inside session you need to use cookieParser
app.use(cookieParser("secretcode"));

//serving public file
app.use(express.static("../frontend"));



//Routes
app.post("/login", (req, res)=>{
    console.log(req.body);
});


app.post("/login", (req, res)=>{
    console.log(req.body);
});

app.post("/register", (req, res)=>{
    console.log(req.body);
});

app.post("/user", (req,res)=>{
    console.log(req.body);
});




app.listen(4000, ()=> {
    console.log("Server up and running...");
});