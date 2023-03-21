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
const User = require('./user');

var path=require("path");

/* ---------------------------------END OF IMPORTS------------------------------------------------------ */

mongoose.connect("mongodb+srv://Kamil:dXOkq6gzwPhbIQ4O@cluster0.ct0wmof.mongodb.net/?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
()=>{
    console.log("Mongoose Is Connected");
}
);


/* ---------------------------------MIDDLEWARES----------------------------------------------------------- */
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

app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);

//serving public file
app.use(express.static("../frontend"));


/* -------------------------------------END OF MIDDLEWARES------------------------------------------------------ */



/* ----------------------------------------------ROUTES--------------------------------------------------------- */
app.post("/login", (req, res, next)=>{
    passport.authenticate("local", (error, user, info)=>{
        if(error){
            throw error;
        }
        if(!user){
            res.send("The user doesn't exists");
        }else{
            req.logIn(user, (error)=>{
                if(error){
                    throw error;
                }else{
                    res.send(req.user);
                }
            });
        }
    })(req, res, next);
});

app.post("/logout", async (req,res,next)=>{

    console.log("I am running");

    req.logout((err)=>{ //logout will terminate session
        if(err){
    
            return next(err);
        }else{
           res.send({"redirect":"yes"});
        }
    });

});

app.post("/register", (req, res)=>{
    User.findOne({username: req.body.username}, async (error,doc)=>{   //checking if user exists in database already
        if(error){   
            throw error;    //throws error
        }
        if(doc){    //user found in database
            res.send("User already Exists");   
        }  
        if(!doc){     //if user doesnt exist then create new one
            const hashedPassword = await bcrypt.hash(req.body.password, 10); //hashing password with salt 10 ()

            const newUser = new User({
                username: req.body.username,
                password: hashedPassword,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                agegroup: req.body.agegroup,
                leader: "",
                yourGoal: "",
                yourAchievements: ""
            });
            await newUser.save(); //await being send
            res.send("User Created");
        }
    })
});

app.post("/yourGoal", (req, res)=>{
    console.log(req.body);
    User.findOneAndUpdate(
        
        {username: req.body.username},
        {yourGoal: req.body.yourGoal}, 
        (error, data)=>{
            if(error){
                res.send(error);
            }else{
                res.send(req.body);
            }
        }
    );
});

app.post("/addAchievement", (req, res)=>{
    console.log("Hello");
    console.log(req.body);
    User.findOneAndUpdate(
        
        {username: req.body.username},
        {$push: {yourAchievement: req.body.yourAchievement}}, 
        (error, data)=>{
            if(error){
                res.send(error);
            }else{
                res.send(req.body);
            }
        }
    );
});

/* ----------------------------------------------END OF ROUTES----------------------------------------------------- */


app.listen(4000, ()=> {
    console.log("Server up and running...");
});