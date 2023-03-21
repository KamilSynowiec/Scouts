import Footer from "../../../components/Footer/Footer.js";
import Navigation from "../../../components/Navigation/index.js";
import React from "react";
import {v4 as uuidv4} from 'uuid';
import { Link } from "react-router-dom";
import axios from 'axios';


//let userObj=JSON.parse(document.cookie);

const yourAchievement=[
    {
        name: 'Robin',
        id: 'a',
    },
    {
        name: 'Dennis',
        id: 'b',
    },
];


function AddAchievement(){
    const [list, setList]=React.useState(yourAchievement);
    const [name, setName]=React.useState('');

    let userObj=JSON.parse(document.cookie);

    function handleChange(event){ //handle input field's state/ saving input's value into name variable
        setName(event.target.value);
    }

    function handleAdd(){ 

        yourAchievement.push(list);

        axios({ //axios http client for the browser (library that helps us send all the requests)
            method: "post",
            data: {
                username: userObj.username,
                firstname: userObj.firstname,
                yourAchievement: yourAchievement,
                lastname: userObj.lastname,
            },
            withCredentials: true,
            url: "http://localhost:4000/addAchievement",
        }).then((res)=> {    
            if(res.data.hasOwnProperty('yourAchievement')){
                console.log("response received");

                console.log(res.data);
                
                //document.cookie=JSON.stringify(res.data); //converting object to string to store in cookie
                //userObj=JSON.parse(document.cookie);
                //navigate('/portfolio');
            }
            else{
                console.log("error occured");
            }
        });


        //add item to current list and update

        const newList = list.concat({name, id: uuidv4()});

        setList(newList);

        setName(''); //clearing input field
    }

    return(
        <div>
            <Navigation/>

            <div class="center" id="inputForm" style={{display: ''}}>
                <h2>Add new Achievement</h2>
                <input type="text" value={name} onChange={handleChange}/>
                <button type="button" onClick={handleAdd}>
                    Add
                </button>
            </div>
            <div class="center">
                <Link to="/portfolio"><button id="login_button">Back to Portfolio</button></Link>
            </div>

            <Footer/>
        </div>
    );
}

export default AddAchievement;