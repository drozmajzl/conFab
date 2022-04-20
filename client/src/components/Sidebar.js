import { useState } from 'react'
import SetlistShow from './SetlistShow'
import AudioPlayer from './AudioPlayer'
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus, faCircleCheck } from "@fortawesome/free-solid-svg-icons";


function Sidebar({ user, setlists, setSetlists, showSideBar, fetchSetlists, addTrack, setAddTrack, setShowSidebar }){
    const [showForm, setShowForm] = useState(false)
    const [formName, setFormName] = useState("")
    const [showAudioPlayer, setShowAudioPlayer]=useState(false)
    const [playTrack, setPlayTrack]=useState("Let It Be/The Beatles STUDIO BLOOPERS")
    

    const newSetlist = {
        user_id: user.id,
        name: formName
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/setlists", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newSetlist),
        })
          .then((r) => r.json())
          .then((setlist) => setSetlists([...setlists, setlist]))
          setFormName("")
          setShowForm(false)
        }

    const setlistForm = (
        <div className="setlist-form">
            <form onSubmit={handleSubmit}>
                <input type = "text" value={formName} onChange={(e) => setFormName(e.target.value)} placeholder="New Setlist Name"></input>
                <input className="button-28" type = "submit"></input>
            </form>
        </div>
    )
    
    function handleSideBar(){
        setShowSidebar(!showSideBar)
        setShowAudioPlayer(false)
    }

    return(
        <div style={{width: (showSideBar ? "250px" : "75px")}}id="setlist_container">
            <h3 className="closeButton" onClick={()=>handleSideBar()}>☰</h3>
            <div className={showSideBar ? "sideBarContentsVisible" : "sideBarContentsInvisible"}>
            
            {setlists? <h3>Setlists</h3> : null }
            {setlists.length > 0 ? <SetlistShow playTrack={playTrack} setPlayTrack={setPlayTrack} showAudioPlayer={showAudioPlayer} setShowAudioPlayer={setShowAudioPlayer} setAddTrack={setAddTrack} addTrack={addTrack} fetchSetlists={fetchSetlists} setlists={setlists} setSetlists={setSetlists}/> : null}
            <FontAwesomeIcon className="addPlaylistButton" style={{ fontSize:"20px", padding:"10px" }} icon={showForm? faSquareMinus : faSquarePlus} id="new-setlist" onClick={()=>setShowForm(!showForm)}>{showForm ? "Cancel" : "New Setlist" }</FontAwesomeIcon>
            {showForm ? setlistForm : null}
            <div className="sidebarAudioDiv">
            {showAudioPlayer ? <div className="sideaudio"><AudioPlayer audioTrack={playTrack} /></div> : null}
            </div>
            </div>
        </div>
    )
}

export default Sidebar;