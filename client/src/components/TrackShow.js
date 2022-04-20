import {useState} from 'react';
import {useParams} from 'react-router-dom';
import Comments from './Comments';
import AudioPlayer from './AudioPlayer';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus, faX } from "@fortawesome/free-solid-svg-icons";

function TrackShow( {user, setlists, setSetlists, setAddTrack, albums, tracks, setTracks, showSideBar }){
    const params = useParams();
    // const [tracks, setTracks] = useState([])
    const [showModal, setShowModal] = useState(false)

    // useEffect(() => {
    //     fetch("/tracks")
    //   .then((res) => res.json())
    //   .then((data) => setTracks(data))}, 
    //   [])

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
      
      
      const currentTrack = tracks.find((t)=>t.id === parseInt(params.trackId))
      
      // const currentTrack = tracks[params.trackId - 1]

      const setListButtons = setlists.map((s)=> <p className="setlist-button" key={s.id} onClick={()=>addToSetlist(s.id)}>{s.name}</p>)

      const substrings = currentTrack&&currentTrack.lyrics.split('<br> '); 

      const formattedLyrics = substrings&&substrings.map((l, key)=> <p key={key}>{l}</p>)

      console.log(currentTrack)

    if (tracks.length > 0 && user && currentTrack){
     

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
        <div>
          <div className="detail-card">
            <h1 className="track-show-title">{currentTrack.name}</h1>
            <p>Composer: {currentTrack.composer}</p>
            <p>Date Recorded: {currentTrack.record_date}</p>
            <FontAwesomeIcon className="addToPlaylistTrackList" icon={faSquarePlus} onClick={()=>setShowModal(!showModal)}></FontAwesomeIcon>
            </div>
           <div className='trackShowDiv' style={{marginBottom:"55px", marginTop:"20px"}}>
        <div className="song_card">
            {showModal ? modal : null}
            
            {/* <p>Lyrics: {currentTrack.lyrics}</p> */}
            <div className="lyrics-div">
              <h2 className="lyrics-header">Lyrics</h2>
            {formattedLyrics}
            </div>
            {/* {showModal && currentTrack.audio_track !== "none" ? null : <audio controls src={require(`../assets/${currentTrack.audio_track}.mp3`).default}></audio>} */}
            
        </div>
          <div className="comment-div">
            {currentTrack ? <Comments fetchTracks={fetchTracks} user={user} track={currentTrack}/> : null}
            </div>
            </div>
            {showModal && currentTrack.audio_track !== "none" ? null : <div id="trackShowAudio" style={{marginLeft: (showSideBar ? "115px" : "20px")}}><AudioPlayer audioTrack={currentTrack.audio_track}/></div>}
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