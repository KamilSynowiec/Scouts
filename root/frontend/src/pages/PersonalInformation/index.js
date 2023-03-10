import Footer from "../../components/Footer/Footer.js";
import Navigation from "../../components/Navigation/index.js";
import { useNavigate } from "react-router-dom";
import './info_styles.css';

function PersonalInformation(){

    const navigate = useNavigate();

    let user=JSON.parse(document.cookie);
    console.log(user);
    
    /*

   if(typeof JSON.parse(document.cookie) != "undefined"){
    navigate("/");
    console.log("navigating");
   }else{
    user=JSON.parse(document.cookie);

    
   
   }
    */

    return(
        <div>
            <Navigation/>
            <div>
                <div>
                    <h2 id="info_header">Information about you:</h2>
                </div>
                <div id="info_list">
                    <ul>
                        <li class="info_li_elements">Name: {user.firstname}</li>
                        <li class="info_li_elements">Surname: {user.lastname}</li>
                        <li class="info_li_elements">Email: {user.username}</li>
                        <li class="info_li_elements">Group: {user.agegroup}</li>
                        <li class="info_li_elements">Leader: {user.leader}</li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default PersonalInformation;