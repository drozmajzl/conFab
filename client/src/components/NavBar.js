
import { NavLink } from "react-router-dom";


function NavBar ({ user }){

    return (
        <div id="nav">
        {user ? <div>
        <NavLink
         to="/"
         exact
        >
            <button type="button" className="btn btn-outline-light">Home Page</button>
        </NavLink>
        <NavLink
        to="/albums" 
        exact
        >
            <button type="button" className="btn btn-outline-light">Albums</button>
        </NavLink>
        <NavLink
            to="/myProfile"
            exact>
                <button type="button" className="btn btn-outline-light">My Profile</button>
            </NavLink>
        </div> : null }
        </div>
    )
}

export default NavBar;