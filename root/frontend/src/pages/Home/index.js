import Footer from "../../components/Footer/Footer.js";
import Navigation from "../../components/Navigation/index.js";
import { useNavigate } from "react-router-dom";

function Home(){

    const navigate = useNavigate();

    let user=""; 
    

   if(typeof JSON.parse(document.cookie) != "undefined"){
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