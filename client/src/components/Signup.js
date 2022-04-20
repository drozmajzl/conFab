import React from 'react'
import { useState } from 'react';

function Signup({ login }) {

  const [signup, setSignup] = useState(false)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [admin, setAdmin] = useState(false)

  function handleSignup(e){
    e.preventDefault();
    fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          passwordConfirmation,
          name, 
          email,
          age,
          admin
        }),
      })
        .then((r) => r.json())
        .then((data)=> {
          if (data.errors)
          {
            console.log(data)
            data.errors.forEach(e => e === "Age must be greater than or equal to 18" ? alert("Must be 18 or older") : alert(e))
          }
          else{
        setSignup(false);
        setUsername('')
        setPassword("")
        setPasswordConfirmation("")
        setName("")
        setAdmin(false)
        setAge("")
        setEmail("")
        alert("Profile Successfully Created! Please Log In.")

          }
        }
        )
    }

    const signupBox = (
      <div className="modal_container">
        <div className="modal2">
          <form onSubmit={handleSignup}>
            <div className="mb-3">
              <input type ="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
              </div>
              <div className="mb-3">
              <input type ="text"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
              </div>
              <div className="mb-3">
              <input type ="text"  value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="password confirmation"/>
              </div>
              <div className="mb-3">
              <input type ="text"  value={name} onChange={(e) => setName(e.target.value)} placeholder="name"/>
              </div>
              <div className="mb-3">
              <input type ="text"  value={age} onChange={(e) => setAge(e.target.value)} placeholder="age"/>
              </div>
              <div className="mb-3">
              <input type ="text"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
              </div>
              <div className="mb-3">
              <input type = "submit" className="basic"></input>
              </div>
           
          </form>
          </div>
      </div>
    )
    
return (
  <div>
      <nav>
          <button type="button" className="basic" onClick ={() => setSignup(!signup)}>Signup</button>
          {signup ? signupBox : null}
      </nav>
  </div>
)
}

export default Signup