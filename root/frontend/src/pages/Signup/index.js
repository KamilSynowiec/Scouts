import React, {useState} from "react";
//import './style.css'; //styles
import Footer from "../../components/Footer/Footer.js";
import axios from 'axios';

function Register(){
    //state
    const [registerUsername, setRegisterUsername]= useState("");
    const [registerPassword, setRegisterPassword]= useState("");

    //method registering user
    const register = () =>{
        axios({ //axios http client for the browser (library that helps us send all the requests)
            method: "post",
            data: {
                username: registerUsername,
                password: registerPassword
            },
            withCredentials: true,
            url: "http://localhost:4000/register",
        }).then((res)=> console.log(res));
    };


    return(
        <div>
            <div>
                <h1>Scouts</h1>
                <div id="register-form">
                    <div id="upper">
                        <input id="username" placeholder="username" onChange={e => setRegisterUsername(e.target.value)}/>
                    </div>
                    <div id="lower">
                        <input id="password" placeholder="password" onChange={e => setRegisterPassword(e.target.value)}/>
                    </div>

                    <div>
                        <button type="submit" onClick={register}>Register</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Register;