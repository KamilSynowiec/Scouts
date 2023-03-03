const User = require("./user.js");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy; //local strategy - authenticaiton with username and password

module.exports = function(passport){

    passport.use(
        new localStrategy((username, password, done)=>{
            User.findOne({username: username}, (error,user)=>{
                if(error){
                    throw error;
                }
                if(!user){
                    return done(null, false); //null means no error and false means no user was found

                }else{  //if there is user
                    bcrypt.compare(password, user.password, (error, result)=>{
                        if(error){
                            throw error;  
                        }
                        if(result===true){
                            return done(null, user);  //if the password is correct return user
                        }else{
                            return done(null, false);  //if the password is not correct return false
                        }
                    });
                }
            });
        })
    );


    passport.serializeUser((user, callback)=>{  //this method stores cookie inside a browser
        callback(null, user.id);
    });

    passport.deserializeUser((id, callback)=>{
        User.findOne({_id: id}, (error, user)=>{
            callback(error, user);
        });
    });





}


