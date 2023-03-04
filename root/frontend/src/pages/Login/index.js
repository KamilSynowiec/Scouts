import React, {useState} from "react";
import './styles.css'; //styles
import Footer from "../../components/Footer/Footer.js";
import axios from 'axios';
import { Link } from "react-router-dom";
import Navigate from "react";

function Login(){
    //state
    const [loginUsername, setloginUsername]= useState("");
    const [loginPassword, setloginPassword]= useState("");

    //method logging user in
    const login = () =>{
        axios({ //axios http client for the browser (library that helps us send all the requests)
            method: "post",
            data: {
                username: loginUsername,
                password: loginPassword
            },
            withCredentials: true,
            url: "http://localhost:4000/login",
        }).then((res)=> {   //response user object containing name, surname, group etc
            if(res.data=="The user doesn't exist"){  
                console.log("The user doesn't exist");
                document.getElementById("loginInfo").innerHTML="The user doesn't exist";
            }else{
               console.log(res.data);
               window.location.href = "/home";
            }
        });
    };

    const password = () =>{
        console.log("password forgotten");
    }

    return(
        <div>
            <div>
                <h1 id="h1">Scouts</h1>
                <div id="login-form">
                    <p id="loginInfo"></p>
                    <div id="upper">
                        <input id="username" placeholder="username" onChange={e => setloginUsername(e.target.value)}/>
                    </div>
                    <div id="lower">
                        <input id="password" placeholder="password" onChange={e => setloginPassword(e.target.value)}/>
                    </div>
                    <div>
                        <div id="button-left">
                            <a href="" onClick={password} id="fpassword">Forgot password</a>
                        </div>
                        <div id="button-right">
                            <button id="loginButton" type="submit" onClick={login}>Login</button>
                        </div>
                      
                    </div>
                    <div>
                        <div id="second-left">
                            <p>Do not have an account yet? Sign up here:</p>
                            <Link to="/register">Register</Link>
                        </div>
                        <div id="second-right">
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Login;