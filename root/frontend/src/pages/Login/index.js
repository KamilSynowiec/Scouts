import React, {useState} from "react";
import './styles.css'; //styles
import Footer from "../../components/Footer/Footer.js";
import axios from 'axios';

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
        }).then((res)=> console.log(res));
    };

    const password = () =>{
        console.log("password forgotten");
    }

    return(
        <div>
            <div>
                <h1>Scouts</h1>
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
                            <button type="submit" onClick={login}>Login</button>
                        </div>
                      
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Login;