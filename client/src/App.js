
import { useState, useEffect } from 'react';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from './components/Logout';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Albums from './components/Albums';
import AlbumShow from './components/AlbumShow';
import TrackShow from './components/TrackShow';
import { Route, Switch, useHistory } from "react-router-dom";
import Sidebar from './components/Sidebar';
import testbackgroun from './testbackgroun.svg';
import './App.css';



function App() {
  const [user, setUser]=useState("")
  const [albums, setAlbums] = useState([])
  const history = useHistory();
  const [setlists, setSetlists] = useState("")
  const [showSideBar, setShowSidebar]=useState(false)
  const [addTrack, setAddTrack]=useState("")
  const [tracks, setTracks] = useState([])

    useEffect(() => {
        fetch("/user_setlists")
      .then((res) => res.json())
      .then((data) => setSetlists(data))}, 
      [user])

      function fetchSetlists(){
        fetch("/user_setlists")
      .then((res) => res.json())
      .then((data) => setSetlists(data))
      }

      useEffect(() => {
        fetch("/tracks")
      .then((res) => res.json())
      .then((data) => setTracks(data))}, 
      [user])

  const handleReroute = () => {
    history.push("/");
    }

    useEffect(() => {
      fetch("/albums")
    .then((res) => res.json())
    .then((data) => setAlbums(data))}, 
    [user])

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => setUser(data));
      }
    });
  }, []);

  // function login (username, password){
  //   fetch("/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ username, password }),
  //   })
  //     .then((r) => r.json())
  //     .then((data) => (user.username ? setUser(data) : null))
  // }

  function handleLogout() {
    fetch("/logout", {
        method: "DELETE",
        }).then(() => setUser())
        .then(()=>handleReroute())
      }

  function handleDeleteProfile() {
    fetch(`/users/${user.id}`, {
      method: "DELETE",
    }).then(() => setUser())
    .then(()=>handleReroute())
  }

  if(!user){
    return(
      <div className="App" style={{marginLeft: "0px", backgroundImage: `url(${testbackgroun})`, backgroundRepeat:'repeat-x'}}>
      {user? null : <Signup /> }
      {user ? <Logout handleReroute={handleReroute} handleLogout={handleLogout}/> : <Login onLogin={setUser}/> }
      <h1 style={{ marginTop:"20vw"}} className='confab'>ConFab!</h1>
      <p>Discuss and learn the music of The Beatles!</p>
      </div>
    )
  }
    
  return (
    
    <div className="App" style={{marginLeft: (showSideBar ? "250px" : "75px"), backgroundImage: `url(${testbackgroun})`, backgroundRepeat:'repeat-x'}}>
      {/* {false ? null : <button className="openButton" onClick={()=>setShowSidebar(true)}>☰</button>} */}
      <div className="nav-div">
      <NavBar user={user}/>
      <Logout handleReroute={handleReroute} handleLogout={handleLogout}/>
      </div>
      {user? null : <Signup />}
      {user ? null: <Login onLogin={setUser}/>}
      {user && setlists ? <Sidebar setShowSidebar={setShowSidebar} setAddTrack={setAddTrack} addTrack={addTrack} fetchSetlists={fetchSetlists} showSideBar={showSideBar} setlists={setlists} setSetlists={setSetlists} user={user}/> : null }
      <Switch>
      <Route exact path="/">
          <div>
            <h1 className='confab'>ConFab!</h1>
            {/* {user ?<h1> Welcome, {user.name}!</h1> : null} */}
            <img id="beatles-logo" style={{width: "40vw"}} src={require(`./assets/Album Covers/beatleslogo.png`).default}></img>
          </div>
        </Route>
        <Route exact path="/myProfile">
          <Profile setUser={setUser} user={user} deleteProfile={handleDeleteProfile}/>
        </Route>
        <Route exact path="/albums">
          <Albums showSideBar={showSideBar} addTrack={addTrack} setAddTrack={setAddTrack} setlists={setlists} albums={albums}/>
        </Route>
        <Route exact path={`/albums/:albumId`}>
        {/* <Route exact path={`/albums/0`}> */}
                {albums ? <AlbumShow showSideBar={showSideBar} addTrack={addTrack} setAddTrack={setAddTrack} fetchSetlists={fetchSetlists} setlists={setlists} setSetlists={setSetlists} albums={albums} setAlbums={setAlbums}/> : null}
            </Route>
            <Route exact path={`/albums/tracks/:trackId`}>
                <TrackShow showSideBar={showSideBar} tracks={tracks} setTracks={setTracks} albums={albums} setAddTrack={setAddTrack} setSetlists={setSetlists} setlists={setlists} user={user}/>
            </Route>
      </Switch>
    </div>
  );
}

export default App;
