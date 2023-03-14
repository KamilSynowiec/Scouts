import axios from 'axios';
import { useNavigate } from 'react-router-dom';  //for redirecting to login page
import './nav_styles.css'; //styles
import logo from '../../assets/scouts_logo.png';


function Navigation(){

    const navigate = useNavigate();

    let user=JSON.parse(document.cookie);
    console.log(user);
   
    async function logout(){
        const loggingout = { title: 'React POST logout Request'};

        try{
            const response = await axios({ method: "POST",url: "http://localhost:4000/logout", withCredentials: true})
            if(response.data.redirect=="yes"){
                navigate('/');
            }
            else
            {
                console.log("error");
            }
            
        }catch (error) {
            console.log(error)
        }
    };

    function personalInfo(){
        navigate("/personalInfo");
    }
    function yourGoal(){
        navigate("/yourGoal");
    }
    

    return(
        <div id="container">
            <div>
                <img id="logo" src={logo} alt="logo"/>{/*logo*/}
                <h1 id="header">{user.firstname}'s portfolio</h1>
                <div id="logout_button_div">
                    <button id="logout_button" onClick={logout}>logout</button>  {/*logout button*/}
                </div>
            </div>

            <div id="nav_div"> {/*navigation buttons*/}
                <button class="nav_buttons">Portfolio</button>  {/*</a><img src={logo} />*/}
                <button class="nav_buttons" onClick={yourGoal}>Your goal</button>
                <button class="nav_buttons">Calendar</button>
                <button class="nav_buttons">Your skills</button>
                <button class="nav_buttons">Contact your leader</button>
                <button class="nav_buttons">Shareboard</button>
                <button class="nav_buttons" onClick={personalInfo}>Personal Information</button>
            </div>

        </div>
    );

}

export default Navigation;