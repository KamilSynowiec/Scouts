import Footer from "../../components/Footer/Footer.js";
import Navigation from "../../components/Navigation/index.js";
import React from "react";

const initialList=[
    {
        id: 'a',
        name: 'Robin',
    },
    {
        id: 'b',
        name: 'Dennis',
    },
];


function Portfolio(){
    const [list, setList]=React.useState(initialList);
    const [name, setName]=React.useState('');

    let achievements = ["achievement_1", "achievement_2", "achievement_3", "achievement_4"];

    //let userObj=JSON.parse(document.cookie);

    function handleChange(){ //handle input field's state

    }

    function handleAdd(){ //add item
        
    }
    

    return(
        <div>
            <Navigation/>

            <div>
                <input type="text" value={name} onChange={handleChange}/>
                <button type="button" onClick={handleAdd}>
                    Add
                </button>
            </div>

            <div>
                <h2>Your achievements</h2>
                <ul> 
                    {list.map((item)=>(
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>

            </div>

            
            <Footer/>
        </div>
    );
}

export default Portfolio;