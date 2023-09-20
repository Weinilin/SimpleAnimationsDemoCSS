import './App.css';
import './spin.css'
import './bounce.css'
import './jumpHor.css'
function App() {
  return (
      <div className="App">
          <div>
             <b>
                <p>
                Display of animations
              </p>
              </b>
      
          </div>
     <p> Spin </p>
          <img className="spin" width="64" src="https://upload.wikimedia.org/wikipedia/commons/8/8d/KDE_logo.svg" alt="" />
          <br></br>
          <p> Bounce </p>
          <img className="bounce" width="64" src="https://upload.wikimedia.org/wikipedia/commons/8/8d/KDE_logo.svg" alt="" />
          <br></br>
          <p> Squeeze and jump </p>
          <img className="jumpHor" width="64" src="https://upload.wikimedia.org/wikipedia/commons/8/8d/KDE_logo.svg" alt="" />
          <br></br>
    
      </div>
     
  );
}

export default App;
