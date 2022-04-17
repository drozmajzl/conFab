
import {React} from 'react';
import { useParams } from "react-router-dom";
import TrackList from './TrackList';

function AlbumShow( { albums, setAlbums, setlists, setSetlists, fetchSetlists, addTrack, setAddTrack, showSideBar }){
    const params = useParams();
    let currentAlbum = albums[params.albumId]

        if(albums.length > 0){
    return(
        <div>
            <h3>{currentAlbum.name}</h3>
            {/* <h3>Albums Show Component!</h3> */}
            <h3>Tracks:</h3>
            <TrackList showSideBar={showSideBar} addTrack={addTrack} setAddTrack={setAddTrack} fetchSetlists={fetchSetlists} setlists={setlists} setSetlists={setSetlists} tracks={currentAlbum.tracks}/>
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