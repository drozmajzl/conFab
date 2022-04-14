import { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';

function Setlist({ setlist, deleteSetlist, fetchSetlists, addTrack, setAddTrack }){
    const [showTracks, setShowTracks]=useState(false)
    const [setlistTrack, setSetlistTrack]=useState(setlist.setlist_tracks)

    useEffect(()=>{
        if (addTrack !== "" && addTrack.setlist_id === setlist.id){
            setSetlistTrack([...setlistTrack, addTrack])
            setAddTrack("")
        }
    }, [addTrack])

    function handleDeleteTrack(track_id){
        
    fetch(`/setlist_tracks/${track_id}}`, {
        method: "DELETE",
        }).then((d)=>console.log(d))
        const deleteTrack = setlistTrack.filter((s)=> s.id !== track_id)
        setSetlistTrack([...deleteTrack])
    }

    const setlistTracksDisplay = setlistTrack.map((t) => 
    <div className={"track_display"} key={t.id}>
        <NavLink to={`/albums/tracks/${t.track.id}`}
            exact>
        <p>{t.track.name}</p>
        </NavLink>
        <button onClick={()=>handleDeleteTrack(t.id)}>x</button>
    </div>)
    
    return(
        <div>
            <h4 onClick={()=>setShowTracks(!showTracks)}>{setlist.name}</h4>
            {showTracks ? <div className="tracks_div">
            {setlistTracksDisplay}
            </div>: null}
            {showTracks? <button onClick={()=>deleteSetlist(setlist.id)}>Delete Playlist</button> : null}
        </div>
    )
}

export default Setlist;

