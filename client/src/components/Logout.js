
// import { NavLink, useHistory } from "react-router-dom";
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function Logout ({ handleLogout }){
 
    return(
        <header>
          <FontAwesomeIcon className="div-icon" icon={faArrowRightFromBracket} style={{paddingLeft: "20px" }} onClick={handleLogout}></FontAwesomeIcon>
        </header>
    
    )}
    
    
    
    export default Logout;
    
    
    
    
     