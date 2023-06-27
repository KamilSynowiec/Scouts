import React, {useState} from "react";
import './styles.css'; //styles
import Footer from "../../components/Footer/Footer.js";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';  //for redirecting to home page


function Login(){
    //state
    const [loginUsername, setloginUsername]= useState("");
    const [loginPassword, setloginPassword]= useState("");

    const navigate = useNavigate();

    //method logging user in
    const login = () =>{
        axios({ //axios http client for the browser (library that helps us send all the requests)
            method: "post",
            data: {
                username: loginUsername,
                password: loginPassword
            },
            withCredentials: true,
            url: "https://scouts-3vfi.onrender.com",
        }).then((res)=> {   //response user object containing name, surname, group etc
            console.log(res);
            
            if(res.data=="The user doesn't exist"){  
                console.log("The user doesn't exist");

                //this.ref.textInput.value="The user doesn't exist";
            }
            
            if(res.data.hasOwnProperty('firstname')){

                document.cookie=JSON.stringify(res.data); //converting object to string to store in cookie
                navigate('/home');
                
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
