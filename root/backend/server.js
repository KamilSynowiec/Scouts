const mongoose = require("mongoose");
const express = require("express");
const cors= require("cors");
const passport= require("passport");
const passportlocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const expressSession = require("express-session");
const bodyParser = require("body-parser");

const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(expressSession({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}));


//whenever you call the secret inside session you need to use cookieParser

app.listen(4000, ()=> {
    console.log("Server up and running...");
});