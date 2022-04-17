import { useState } from 'react'
import SetlistShow from './SetlistShow'
import AudioPlayer from './AudioPlayer'

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
        <div>
            <form onSubmit={handleSubmit}>
                <input type = "text" value={formName} onChange={(e) => setFormName(e.target.value)} placeholder="New Setlist Name"></input>
                <input type = "submit"></input>
            </form>
        </div>
    )
    

    return(
        <div style={{width: (showSideBar ? "250px" : "0px")}}id="setlist_container">
            <h3 className="closeButton" onClick={()=>setShowSidebar(false)}>☰</h3>
            <button onClick={()=>setShowForm(!showForm)}>{showForm ? "Cancel" : "New Setlist" }</button>
            {showForm ? setlistForm : null}
            {setlists? <h3>Setlists:</h3> : null }
            {setlists.length > 0 ? <SetlistShow playTrack={playTrack} setPlayTrack={setPlayTrack} showAudioPlayer={showAudioPlayer} setShowAudioPlayer={setShowAudioPlayer} setAddTrack={setAddTrack} addTrack={addTrack} fetchSetlists={fetchSetlists} setlists={setlists} setSetlists={setSetlists}/> : null}
            {showAudioPlayer ? <div className="sideaudio"><AudioPlayer audioTrack={playTrack} /></div> : null}
        </div>
    )
}

export default Sidebar;