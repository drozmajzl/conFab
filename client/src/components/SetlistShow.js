import Setlist from './Setlist';

function SetlistShow({ setlists, setSetlists, fetchSetlists, addTrack, setAddTrack, showAudioPlayer, setShowAudioPlayer, playTrack, setPlayTrack }){
    
    const setlistDisplay = setlists&&setlists.map((s)=> 
        <Setlist key={s.id} playTrack={playTrack} setPlayTrack={setPlayTrack} setAddTrack={setAddTrack} addTrack={addTrack} fetchSetlists={fetchSetlists} setlist={s} deleteSetlist={deleteSetlist} showAudioPlayer={showAudioPlayer} setShowAudioPlayer={setShowAudioPlayer}/>
    )

    function deleteSetlist(x){
        const updatedSetlists = setlists.filter((s) => s.id !== x)
        setSetlists(updatedSetlists)
        setShowAudioPlayer(false)
        handleDeleteSetlist(x)
    }

    function handleDeleteSetlist(x) {
        fetch(`/setlists/${x}`, {
            method: "DELETE",
            }).then(()=>console.log("successfully deleted"))
          }

    return(
        <div>
            {/* {setlists.length > 0 ? setlistDisplay : null} */}
            {setlistDisplay}
        </div>
    )
}

export default SetlistShow;