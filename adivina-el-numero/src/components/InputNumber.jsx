import React from 'react';

const InputNumber = ({ guess, setGuess, onGuess }) => {
  return (
    <div>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Ingresa tu número"
      />
      <button onClick={onGuess}>Adivinar</button>
    </div>
  );
};

export default InputNumber;

