import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Comments from './Comments';

function TrackShow( {user, setlists, setSetlists, setAddTrack }){
    const params = useParams();
    const [tracks, setTracks] = useState([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        fetch("/tracks")
      .then((res) => res.json())
      .then((data) => setTracks(data))}, 
      [])

      function fetchTracks(){
        fetch("/tracks")
      .then((res) => res.json())
      .then((data) => setTracks(data))}

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
      }

      const currentTrack = tracks[params.trackId - 1]
      const setListButtons = setlists&&setlists.map((s)=> <button key={s.id} onClick={()=>addToSetlist(s.id)}>{s.name}</button>)

      const substrings = currentTrack&&currentTrack.lyrics.split('   /  ');

      const formattedLyrics = substrings&&substrings.map((l)=> <p key={l}>{l}</p>)
    
     

      console.log(currentTrack)

    if (tracks.length > 0 && user && currentTrack.audio_track){

        // console.log(currentTrack.audio_track)
        const missingAudio = (`file:///${currentTrack.audio_track}`)
        // // const missingAudio = require("../assets/Please Please Me/ISawHerStandingThere.mp3")
        // console.log(missingAudio)

        const modal = <div className="modal_container">
        <div className="modal">
            <h3>Add "{currentTrack.name}"" to:</h3>
            {setListButtons}
            <br></br>
            <button onClick={()=>setShowModal(!showModal)}>Close</button>
        </div>
        </div>

    return(
        <div>
        <div className="song_card">
            {showModal ? modal : null}
            <h2>{currentTrack.name}</h2>
            <p>Album:</p>
            <p>Composer: {currentTrack.composer}</p>
            <p>Date Recorded: {currentTrack.record_date}</p>
            {/* <p>Lyrics: {currentTrack.lyrics}</p> */}
            {formattedLyrics}
            {showModal && missingAudio ? null : <audio controls src={missingAudio}></audio>}
            <button onClick={()=>setShowModal(!showModal)}>Add to Playlist</button>
        </div>
            {currentTrack ? <Comments fetchTracks={fetchTracks} user={user} track={currentTrack}/> : null}
        </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

export default TrackShow;