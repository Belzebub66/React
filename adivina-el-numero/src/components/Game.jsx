import React, { useState } from 'react';
import InputNumber from './InputNumber';
import Message from './Message';
import RestartButton from './RestartButton';

const Game = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleGuess = () => {
    const userGuess = parseInt(guess, 10);
    if (isNaN(userGuess)) {
      setMessage('Por favor, ingresa un número válido.');
      return;
    }
    if (userGuess < number) {
      setMessage('Demasiado bajo. Intenta de nuevo.');
    } else if (userGuess > number) {
      setMessage('Demasiado alto. Intenta de nuevo.');
    } else {
      setMessage('¡Felicidades! Has adivinado el número.');
    }
  };

  const handleRestart = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('');
  };

  return (
    <div>
      <h1>Adivina el Número</h1>
      <InputNumber guess={guess} setGuess={setGuess} onGuess={handleGuess} />
      <Message text={message} />
      <RestartButton onRestart={handleRestart} />
    </div>
  );
};

export default Game;
