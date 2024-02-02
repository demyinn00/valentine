import React, { useState } from 'react';
import './App.css';

function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noBtnPos, setNoBtnPos] = useState({});

  const handleYesClick = () => {
    setYesClicked(true);
  };

  const handleNoClick = () => {
    // Generate new positions
    const newPos = {
      position: 'absolute',
      top: `${Math.random() * (window.innerHeight - 40)}px`, // Subtracting button height
      left: `${Math.random() * (window.innerWidth - 80)}px` // Subtracting button width
    };
    setNoBtnPos(newPos);
  };

  return (
    <div className="App">
      <h1>Francesca, will you be my Valentine?</h1>
      <p>See what happens if you try to click no ;)</p>
      {yesClicked ? (
        <h2>Yay! I love you!</h2>
      ) : (
        <>
          <button className="yes-button" onClick={handleYesClick}>Yes</button>
          <button
            className="no-button"
            style={noBtnPos}
            onClick={handleNoClick}>
            No
          </button>
        </>
      )}
    </div>
  );
}

export default App;
