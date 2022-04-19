
import { NavLink } from "react-router-dom";
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecordVinyl, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";


function NavBar ({ user }){

    return (
        <div id="nav">
        {user ? <div>
        <NavLink
        className="div-icon"
        style={{ textDecoration: 'none', padding: "20px" }}
         to="/"
         exact
        >
            <FontAwesomeIcon icon={faHouse}>Home Page</FontAwesomeIcon>
        </NavLink>
        <NavLink
        className="div-icon"
        style={{ textDecoration: 'none', padding: "20px"  }}
        to="/albums" 
        exact
        >
            <FontAwesomeIcon icon={faRecordVinyl}></FontAwesomeIcon>
        </NavLink>
        <NavLink
        className="div-icon"
        style={{ textDecoration: 'none', padding: "20px"  }}
            to="/myProfile"
            exact>
               <FontAwesomeIcon icon={faUser}>My Profile</FontAwesomeIcon>
            </NavLink>
        </div> : null }
        </div>
    )
}

export default NavBar;