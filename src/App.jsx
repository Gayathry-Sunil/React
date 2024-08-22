import { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('#ffffff');

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <h1>Background Color Changer</h1>
      <div className="button-container">
        <button onClick={() => changeColor('red')} className="color-button">Red</button>
        <button onClick={() => changeColor('blue')} className="color-button">Blue</button>
        <button onClick={() => changeColor('green')} className="color-button">Green</button>
        <button onClick={() => changeColor('yellow')} className="color-button">Yellow</button>
        <button onClick={() => changeColor('pink')} className="color-button">Pink</button>
        <button onClick={() => changeColor('purple')} className="color-button">Purple</button>
      </div>
    </div>
  );
}

export default App;
