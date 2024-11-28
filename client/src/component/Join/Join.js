import React, { useState } from 'react'
import './Join.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

let user
const Join = () => {

    const [userName, setUserName] = useState("")

    const sendUser = () => {
        if (userName) {
            localStorage.setItem('user', userName); // Save user to localStorage
        }
        setUserName("");  // Clear input
    }
    
   
  
    return (
    <div className="JoinPage">
    <div className="JoinContainer">
        <img src={logo} alt="logo" />
        <h1>C CHAT</h1>
        <input 
        value={userName}
        onChange={(e) => setUserName(e.target.value)} 
        placeholder="Enter Your Name" type="text" id="joinInput" />
        <Link 
        onClick={(event) => !userName ? event.preventDefault() : null} to="/chat"
        >  
         <button 
         onClick={sendUser} 
         className="joinbtn">
           Login In
         </button>
        </Link>
    </div>
</div>
  )
}

export default Join
export {user} 
// export user variable to use in other components