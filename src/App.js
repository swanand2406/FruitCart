import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [budget, setBudget] = useState('');

  const handleChange = event => {
    setInput(event.target.value);

  };

  const handleClick = event => {
    event.preventDefault();
    setBudget(input);
  };

  return (
    <div style={{ marginLeft: 20 }}>
      <h4>Please enter your Budget</h4>
      <input
        type="text"
        id="input"
        name="input"
        onChange={handleChange}
        value={input}
      />
      <button onClick={handleClick}>Save</button>
      <h2>Budget:{budget}</h2>
    </div>
  );
};

export default App;
