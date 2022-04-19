import {React, useState } from "react";
import { NavLink } from "react-router-dom";
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus, faMusic, faX } from "@fortawesome/free-solid-svg-icons";

function TrackList({ tracks, setlists, setSetlists, fetchSetlists, addTrack, setAddTrack, showSideBar }){
    const [showModal, setShowModal] = useState(false)
    const [currentTrack, setCurrentTrack]=useState("")


    // useEffect(() => {
    //     fetch("/user_setlists")
    //   .then((res) => res.json())
    //   .then((data) => setSetlists(data))}, 
    //   [])

      function ModalDisplay(track){
        setCurrentTrack(track)
        setShowModal(!showModal)
      }


      function addToSetlist(set_id){
        fetch("/setlist_tracks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              setlist_id: set_id,
              track_id: currentTrack.id
            }),
          })
            .then((r) => r.json())
            .then((data)=>setAddTrack(data))
            setShowModal(false)
            setCurrentTrack("")
      }


    const displayTracks = tracks.map((t) => 
        <div key={t.id}>
            
                <div className="track_list_item" key={t.id}>
                <NavLink 
            style={{ textDecoration: 'none', color: "inherit" }}
            to={`tracks/${t.id}`}
            exact>
                <p className="trackListName"><FontAwesomeIcon icon={faMusic}></FontAwesomeIcon> {t.name}</p>
                </NavLink>  
                <FontAwesomeIcon className="addToPlaylistTrackList" icon={faSquarePlus} onClick={()=>ModalDisplay(t)}></FontAwesomeIcon>
                </div>
        </div>
        )

        const setListButtons = setlists.map((s)=> <p className="setlist-button" key={s.id} onClick={()=>addToSetlist(s.id)}>{s.name}</p>)

        const modal = <div style={{marginLeft: (showSideBar ? "125px" : "0px")}} className="modal_container">
        <div className="modal">
            {setListButtons.length === 0 ? null : <h3>Add "{currentTrack.name}" to:</h3>}
            {setListButtons.length === 0 ? "No Setlists Yet! Create a new Setlist to add songs." : null}
            {setListButtons}
            <br></br>
            <FontAwesomeIcon className="modal-close-button" icon={faX}onClick={()=>setShowModal(!showModal)}></FontAwesomeIcon>
        </div>
        </div>

    return(
        <div className="track-list">
            {displayTracks}
            {showModal ? modal : null}
        </div>
        
    )
}

export default TrackList;