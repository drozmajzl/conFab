import {React} from 'react';
import AlbumsList from './AlbumsList';


function Albums({ albums, setlists, addTrack, setAddTrack, showSideBar }){
    // const match = useRouteMatch();


    return(
        <div>
        <AlbumsList showSideBar={showSideBar} addTrack={addTrack} setAddTrack={setAddTrack} setlists={setlists} albums={albums}/>

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