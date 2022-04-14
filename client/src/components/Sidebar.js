import { useState } from 'react'
import SetlistShow from './SetlistShow'

function Sidebar({ user, setlists, setSetlists, showSideBar, fetchSetlists, addTrack, setAddTrack }){
    const [showForm, setShowForm] = useState(false)
    const [formName, setFormName] = useState("")

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
            <button onClick={()=>setShowForm(!showForm)}>{showForm ? "Cancel" : "New Setlist" }</button>
            {showForm ? setlistForm : null}
            {setlists? <h3>Setlists:</h3> : null }
            {setlists.length > 0 ? <SetlistShow setAddTrack={setAddTrack} addTrack={addTrack} fetchSetlists={fetchSetlists} setlists={setlists} setSetlists={setSetlists}/> : null}
        </div>
    )
}

export default Sidebar;