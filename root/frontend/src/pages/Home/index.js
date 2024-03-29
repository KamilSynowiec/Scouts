import Footer from "../../components/Footer/Footer.js";
import Navigation from "../../components/Navigation/index.js";
import { useNavigate } from "react-router-dom";
import './home_styles.css';

function Home(){

    const navigate = useNavigate();

    let user=""; 
    

   if(typeof JSON.parse(document.cookie) != "Object"){
    navigate("/");
    console.log("navigating");
   }else{
    user=JSON.parse(document.cookie);

    console.log(user);
   }

    return(
        <div>
            <Navigation/>
            
            <Footer/>
        </div>
    );
}

export default Home;