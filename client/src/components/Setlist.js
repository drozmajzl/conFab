import { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecordVinyl } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons"

function Setlist({ setlist, deleteSetlist, fetchSetlists, addTrack, setAddTrack, showAudioPlayer, setShowAudioPlayer, playTrack, setPlayTrack }){
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

    function displayAudioPlayer(t){
        
        setPlayTrack(t)
        setShowAudioPlayer(true)
    }

    function dependentDelete(t){
        setShowAudioPlayer(false)
        handleDeleteTrack(t)
    }

    const setlistTracksDisplay = setlistTrack.map((t) => 

    <div className={"track_display"} key={t.id}>
        <FontAwesomeIcon className="playButton" style={{paddingRight: "20px"}} icon={faCirclePlay} onClick={()=>displayAudioPlayer(t.track.audio_track)}></FontAwesomeIcon>
    
        <NavLink style={{ textDecoration: 'none', color: "inherit" }} to={`/albums/tracks/${t.track.id}`}
            exact>
        <p className="setlist-track">{t.track.name.length > 19 ? t.track.name.substring(0,19) : t.track.name}</p>
        </NavLink>
        <FontAwesomeIcon className="deleteSongButton" icon={faX} style={{paddingLeft: "20px"}} onClick={()=>dependentDelete(t.id)}></FontAwesomeIcon>
        
    </div>)
    
    return(
        <div className="setlist-box">
            <h4 onClick={()=>setShowTracks(!showTracks)} className="setlistTitle"><FontAwesomeIcon icon={faRecordVinyl}></FontAwesomeIcon> {setlist.name}</h4>
            
            {showTracks ? <div className="tracks_div">
            {setlistTracksDisplay}
            </div>: null}
            {showTracks? <FontAwesomeIcon className="deleteSetlistButton" icon={faTrashCan} onClick={()=>deleteSetlist(setlist.id)}></FontAwesomeIcon> : null}
        </div>
    )
}

export default Setlist;

