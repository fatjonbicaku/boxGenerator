import React, { useState } from 'react';
import styles from './app.module.css';
import Form from './components/Form/Form';
import Box from './components/Box/Box';

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes([...boxes, newBox]);
  };


  return (
    <>
      <Form addBox={addBox} />
      <div className={styles.boxContainer}>
        {boxes.map((box, index) => (
          <Box key={index} box={box} />
        ))}
      </div>
    </>
  );
}

export default App;
