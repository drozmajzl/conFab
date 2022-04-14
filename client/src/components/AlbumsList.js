
import React from "react";
import { NavLink } from "react-router-dom";

function AlbumsList({ albums, setlists, addTrack, setAddTrack }){

    const albumDisplay = Object.keys(albums).map((albumID) => {
        // console.log(`/albums/${albumID}`)
        return(
            <div key={albumID}>
            <NavLink to={`albums/${albumID}`}
            exact>
            <div className="album_cover">
                <h3>{albums[albumID].name}</h3>
            </div>
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