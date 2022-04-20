import { useState, useEffect } from 'react';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Profile({ user, deleteProfile, setUser }){
    const [deleteButton, setDeleteButton] = useState(true)
    const [edit, setEdit] = useState(false)
    const [username, setUsername] = useState(user&&user.username);
    const [name, setName] = useState(user&&user.name)
    const [age, setAge] = useState(user&&user.age)

    function fetchUser(){
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((data) => setUser(data));
          }
        });
              if (user){
                setUsername(user.username)
                setName(user.name)
                setAge(user.age)
              }
      }

      function refreshFetch(){
        fetchUser()
        setEdit(!edit)
      }

      useEffect(() => {
        fetchUser()
      }, []);

    function handleEdit(e){
        e.preventDefault();
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              name, 
              age,
            }),
          })
            .then((r) => r.json())
            .then((data)=> {
              if (data.errors)
              {
                data.errors.forEach(e => e === "Age must be greater than or equal to 18" ? alert("Must be 18 or older") : alert(e))
              }
              else{
            setUser(data)
            setEdit(false);
            setUsername('')
            setName("")
            setAge("")
            alert("Profile Successfully Updated!")
            // fetchUser();

              }
            }
            )
        }

    const editBox = (
            <form onSubmit={(e)=>handleEdit(e)}>
              <div className="mb-3">
                <label className="label">Username</label>
                <br></br>
                <input type ="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
                </div>
                <div className="mb-3">
                <label className="label">Name</label>
                <br></br>
                <input type ="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name"/>
                </div>
                <div className="mb-3">
                <label className="label">Age</label>
                <br></br>
                <input type ="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="age"/>
                </div>
                <div className="mb-3">
                <button className="basic" type = "submit">Submit</button>
                </div>
                </form>
                )
           
            

    return(
        <div className="profile-card">
            <h1 className="track-show-title">My Profile</h1>
            <FontAwesomeIcon style={{fontSize:"80px"}} icon={faUser}></FontAwesomeIcon>
            {user && !edit ?
            <div>
            <h2 className="list-group-item">Username: {user.username}</h2>
            <h2 className="list-group-item">Name: {user.name}</h2>
            <h2 className="list-group-item">Age: {user.age}</h2>
            <h2 className="list-group-item">Email: {user.email}</h2>
            </div> : null }
            
            { deleteButton ? null : <button type="button" className="basic" style={{width: "10rem"}} onClick={()=>deleteProfile()}> Confirm? </button>}
            { deleteButton && !edit ? <button className="basic" style={{width: "10rem"}}onClick={()=>setDeleteButton(false)}>Delete Profile</button> : null }
            {edit ? editBox : null}
            <button className="basic" onClick={()=>refreshFetch()}>{edit ? "Cancel Edit" : "Edit Profile"}</button>
        </div>
    )
}

export default Profile;