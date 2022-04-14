import {React} from 'react';
import AlbumsList from './AlbumsList';


function Albums({ albums, setlists, addTrack, setAddTrack }){
    // const match = useRouteMatch();


    return(
        <div>
        <h1>Albums Page</h1>
        <AlbumsList addTrack={addTrack} setAddTrack={setAddTrack} setlists={setlists} albums={albums}/>

        {/* <Route exact path={match.url}>
                <h3>Select an Album</h3>
            </Route> */}

            {/* <Route exact path={`${match.url}/:albumId`}> */}
                {/* <AlbumShow albums={albums}/> */}
            {/* </Route> */}
           
        </div>
    )
}

export default Albums;