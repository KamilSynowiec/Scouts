import React, {useState} from "react";
import './styles.css'; //styles
import axios from 'axios';
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer.js";

function Register(){
    //state
    const [registerFirstName, setRegisterFirstName]= useState("");
    const [registerLastName, setRegisterLastName]= useState("");
    const [registerUsername, setRegisterUsername]= useState("");
    const [registerPassword, setRegisterPassword]= useState("");
    const [registerAgeGroup, setRegisterAgeGroup]= useState("");
    

    //method registering user
    const register = () =>{
        axios({ //axios http client for the browser (library that helps us send all the requests)
            method: "post",
            data: {
                firstname: registerFirstName,
                lastname: registerLastName,
                username: registerUsername,
                password: registerPassword,
                agegroup: registerAgeGroup
            },
            withCredentials: true,
            url: "http://localhost:4000/register",
        }).then((res)=> console.log(res));
    };


    return(
        <div>
            <div>
                <h1>Register form</h1>
                <div id="register-form">
                    <div>
                        <label for="firstName" class="labels">First name: </label>
                        <input class="fields" placeholder="firstname" onChange={e => setRegisterFirstName(e.target.value)}/>
                    </div>
                    <div>
                        <label for="lastname" class="labels">Last name: </label>
                        <input class="fields" placeholder="lastname" onChange={e => setRegisterLastName(e.target.value)}/>
                    </div>
                    <div>
                        <label for="username" class="labels">Email: </label>
                        <input id="email" class="fields" placeholder="email" onChange={e => setRegisterUsername(e.target.value)}/>
                    </div>
                    <div>
                        <label for="password" class="labels">Password: </label>
                        <input class="fields" placeholder="password" onChange={e => setRegisterPassword(e.target.value)}/>
                    </div>
                    <div id="group_div">
                    <label for="group" class="labels">Age Group: </label>
                    <select name="group" id="group" onChange={e=> setRegisterAgeGroup(e.target.value)}>  
                        <option id="option_name" value="">Select</option> 
                        <option value="Network: 18-25years">Network: 18-25years</option>
                        <option value="Explorers: 14-18 years">Explorers: 14-18 years</option> 
                        <option value="Scouts: 10,5-14 years">Scouts: 10,5-14 years</option>  
                        <option value="Cubs: 8-10,5 years">Cubs: 8-10,5 years</option>
                        <option value="Beavers: 6-8 years">Beavers: 6-8 years</option> 
                        <option value="Squirrels: 4-6 years">Squirrels: 4-6 years</option>  
                    </select>
                    </div>

                    <div id="buttons">
                        <Link to="/login"><button id="login_button">Back to Login</button></Link>
                        <button id="submitButton" type="submit" onClick={register}>Register</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Register;