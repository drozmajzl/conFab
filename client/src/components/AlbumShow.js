
import {React} from 'react';
import { useParams } from "react-router-dom";
import TrackList from './TrackList';

function AlbumShow( { albums, setAlbums, setlists, setSetlists, fetchSetlists, addTrack, setAddTrack, showSideBar }){
    const params = useParams();
    let currentAlbum = albums[params.albumId]

        if(albums.length > 0){
    return(
        <div>
            <h1 className="tracklist-title">{currentAlbum.name}</h1>
            <img id="album-show-cover" className={showSideBar ? "album_cover_expand" : "album_cover"} style={{width: "20vw", height: "20vw"}} src={require(`../assets/${currentAlbum.album_cover}.jpeg`).default}></img>
            {/* <h3>Albums Show Component!</h3> */}
            <div className="track-list-div">
            <TrackList showSideBar={showSideBar} addTrack={addTrack} setAddTrack={setAddTrack} fetchSetlists={fetchSetlists} setlists={setlists} setSetlists={setSetlists} tracks={currentAlbum.tracks}/>
            </div>
        </div>
    )
        }
else{
    return(
        <div></div>
    )
}
}

export default AlbumShow;