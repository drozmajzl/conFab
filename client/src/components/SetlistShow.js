import Setlist from './Setlist';

function SetlistShow({ setlists, setSetlists, fetchSetlists, addTrack, setAddTrack }){
    
    const setlistDisplay = setlists&&setlists.map((s)=> 
        <Setlist key={s.id} setAddTrack={setAddTrack} addTrack={addTrack} fetchSetlists={fetchSetlists} setlist={s} deleteSetlist={deleteSetlist}/>
    )

    function deleteSetlist(x){
        const updatedSetlists = setlists.filter((s) => s.id !== x)
        setSetlists(updatedSetlists)
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