import Footer from "../../components/Footer/Footer.js";
import Navigation from "../../components/Navigation/index.js";
import { Navigate, useNavigate } from "react-router-dom";
import React, {useState} from "react";
import './goal_styles.css';
import axios from 'axios';

function YourGoal (){
    //state
    const [yourGoal, setyourGoal] = useState("");

    const navigate = useNavigate();  


    let userObj=JSON.parse(document.cookie);

    
    const updateGoal = () =>{ //method to update Goal

        document.getElementById('inputGoal').value='';

        axios({ //axios http client for the browser (library that helps us send all the requests)
            method: "post",
            data: {
                username: userObj.username,
                firstname: userObj.firstname,
                yourGoal: yourGoal,
                lastname: userObj.lastname,
            },
            withCredentials: true,
            url: "http://localhost:4000/yourGoal",
        }).then((res)=> {    
            if(res.data.hasOwnProperty('yourGoal')){
                console.log("response received");

                console.log(res.data);
                
                document.cookie=JSON.stringify(res.data); //converting object to string to store in cookie
                userObj=JSON.parse(document.cookie);
                navigate('/yourGoal');
            }
            else{
                console.log("error occured");
            }
        }
        
        );
        
    };

   

    return(
        <div>
            <Navigation/>
            <div>
                <div id="yourGoal">
                    <input id="inputGoal" placeholder="enter your goal here" onChange={e => setyourGoal(e.target.value)}/>
                    <button type="submit" onClick={updateGoal} id="setGoalBtn">Set goal</button>  
                </div>
                <div>
                    <h2 id="goal_header">Your current goal:</h2>
                </div>
                <div id="goalDisplay">
                    <h2>{userObj.yourGoal}</h2>
                </div>

            </div>
            <Footer/>
        </div>
    );
}

export default YourGoal;