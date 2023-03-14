import Footer from "../../components/Footer/Footer.js";
import Navigation from "../../components/Navigation/index.js";
import { useNavigate } from "react-router-dom";

function Portfolio(){

    const navigate = useNavigate();


    let userObj=JSON.parse(document.cookie);
    

    return(
        <div>
            <Navigation/>

            <h2>Your achievements</h2>
            
            <Footer/>
        </div>
    );
}

export default Portfolio;