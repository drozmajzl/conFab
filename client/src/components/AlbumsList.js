
import React from "react";
import { NavLink } from "react-router-dom";

function AlbumsList({ albums, setlists, addTrack, setAddTrack, showSideBar }){

    const albumDisplay = Object.keys(albums).map((albumID) => {
        // console.log(`/albums/${albumID}`)
        return(
            <div key={albumID}>
            <NavLink to={`albums/${albumID}`}
            exact>
            {/* <div className="album_cover"> */}
                {/* <h3>{albums[albumID].name}</h3> */}
                <img className={showSideBar ? "album_cover_expand" : "album_cover"} style={{width: "20vw", height: "20vw"}} src={require(`../assets/${albums[albumID].album_cover}.jpeg`).default}></img>
            {/* </div> */}
            </NavLink>
            </div>
        )
    })
    
    return(
        <div>
            {albumDisplay}
        </div>
    )
}

export default AlbumsList;