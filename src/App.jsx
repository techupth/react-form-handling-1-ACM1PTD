import "./App.css";
import { useState } from "react";

function App() {
  const [showGreetings, setShowGreetings] = useState("Greeting Meseage")
  const [newGreetings, setNewGreetings] = useState("")

  const handleNewGreetings = (event) => setNewGreetings(event.target.value);
  const handleUpdateClick = () => setShowGreetings(newGreetings);

  return (
    <div className="App">
      <div className="greeting-container">{showGreetings}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" value={newGreetings} onChange={handleNewGreetings}/>
      </div>

      <div className="buttons">
        <button onClick={handleUpdateClick}>Update text</button>
      </div>
    </div>
  );
}

export default App;
