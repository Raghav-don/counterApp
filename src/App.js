import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [text, setText] = useState("Click the button to see the text");
  const [name,setName]=useState("");


  const showText = () => {
    setText("Hello! You clicked the button.From this you have learned how to use react function components,eventListener,hook");
  };
const clearText=()=>{
  setText("");
}
  return (
    <div className={darkMode ? "container dark" : "container"}>
      <br></br>
      <br></br>
      <br></br>
      <h1>Click Counter App</h1>
      <br>
      </br>
      <input
      type="text"
      placeholder="Enter your name"
      value={name}
      onChange={(e)=> setName(e.target.value)}
      />
      <br>
      </br>
      <p>Hello ,{name ? name:"User"}</p>
      <br>
      </br>
      
      <button className="btn-theme" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <br></br>
      <br></br>
      <button className="show-message" onClick={showText}>
        Show Message
      </button>
      <button className="show-message" onClick={clearText}>
        Hide Message
      </button>
      <p>{text}</p>
      
      <Counter />
    </div>
  );
}

export default App;