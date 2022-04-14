
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
import './App.css';


function App() {
  const [user, setUser]=useState("")
  const [albums, setAlbums] = useState([])
  const history = useHistory();
  const [setlists, setSetlists] = useState("")
  const [showSideBar, setShowSidebar]=useState(true)
  const [addTrack, setAddTrack]=useState("")

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
    
  return (
    <div className="App" style={{marginLeft: (showSideBar ? "250px" : "0px")}}>
      <button onClick={()=>setShowSidebar(!showSideBar)}>Sidebar</button>
      <NavBar user={user}/>
      {user? null : <Signup /> }
      {user ? <Logout handleReroute={handleReroute} handleLogout={handleLogout}/> : <Login onLogin={setUser}/> }
      <h1>ConFab!</h1>
      {user ? `Hello, ${user.name}! You are logged in` : null}
      {user && setlists ? <Sidebar setAddTrack={setAddTrack} addTrack={addTrack} fetchSetlists={fetchSetlists} showSideBar={showSideBar} setlists={setlists} setSetlists={setSetlists} user={user}/> : null }
      <Switch>
      <Route exact path="/">
          <div>
            <h1>HOME PAGE</h1>
          </div>
        </Route>
        <Route exact path="/myProfile">
          <Profile setUser={setUser} user={user} deleteProfile={handleDeleteProfile}/>
        </Route>
        <Route exact path="/albums">
          <Albums addTrack={addTrack} setAddTrack={setAddTrack} setlists={setlists} albums={albums}/>
        </Route>
        <Route exact path={`/albums/:albumId`}>
        {/* <Route exact path={`/albums/0`}> */}
                {albums ? <AlbumShow addTrack={addTrack} setAddTrack={setAddTrack} fetchSetlists={fetchSetlists} setlists={setlists} setSetlists={setSetlists} albums={albums} setAlbums={setAlbums}/> : null}
            </Route>
            <Route exact path={`/albums/tracks/:trackId`}>
                <TrackShow setAddTrack={setAddTrack} setSetlists={setSetlists} setlists={setlists} user={user}/>
            </Route>
      </Switch>
    </div>
  );
}

export default App;
