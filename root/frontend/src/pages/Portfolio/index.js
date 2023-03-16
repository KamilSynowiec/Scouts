import Footer from "../../components/Footer/Footer.js";
import Navigation from "../../components/Navigation/index.js";
import React from "react";
import {v4 as uuidv4} from 'uuid';

import './portfolio_styles.css';

const initialList=[
    {
        name: 'Robin',
        id: 'a',
    },
    {
        name: 'Dennis',
        id: 'b',
    },
];


function Portfolio(){
    const [list, setList]=React.useState(initialList);
    const [name, setName]=React.useState('');

    //let userObj=JSON.parse(document.cookie);

    function handleChange(event){ //handle input field's state/ saving input's value into name variable
        setName(event.target.value);


    }

    function handleAdd(){ //add item to current list and update
        const newList = list.concat({name, id: uuidv4()});

        setList(newList);

        setName(''); //clearing input field
    }
    
    function handleRemove(id){
        const newList=list.filter((item)=>item.id !== id);
        
        setList(newList);
        
    }

    return(
        <div>
            <Navigation/>

            <div class="center">
                <input type="text" value={name} onChange={handleChange}/>
                <button type="button" onClick={handleAdd}>
                    Add
                </button>
            </div>

            <div class="center">
                <h2>Your achievements</h2>
                <ul id="portfolio_list"> 
                    {list.map((item)=>(
                        <div>
                            {/*achiement element li */}
                            <li class="portfolio_list_el" key={item.id}>
                                <span>{item.name}</span>
                            </li>

                             {/*button to delete achievement */}
                             <span id="deleteBtn" type="button" onClick={()=> handleRemove(item.id)}>Delete</span>
                        </div>
                        
                    ))}
                </ul>

            </div>

            <div id="right">
                <span id="addAchvBtn">Add new Achievement</span>
            </div>

            
            <Footer/>
        </div>
    );
}

export default Portfolio;