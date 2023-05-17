
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [name,setName]=useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        <label for="text">Enter you name:</label>
        <br/>
        <br/>
        <input type="text" id="text" onChange={(e)=>setName(e.target.value)}/>
        <br/>
        <h1>{name}</h1>
    </div>
  )
}

export default App
