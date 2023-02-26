import React, {useState} from "react";
import './styles.css'; //styles
import Footer from "../../components/Footer/Footer.js";

function Register(){
    const [registerUsername, setRegisterUsername]= useState("");
    const [registerPassword, setRegisterPassword]= useState("");


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
                        <button>Register</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Register;