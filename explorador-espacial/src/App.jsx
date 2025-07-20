// App.jsx
import React, { useState, useEffect, useMemo } from 'react';
import Planeta from './Planeta';
import './App.css'; // Importar estilos

function App() {
  // ... (estado)
  const [combustible, setCombustible] = useState(10); // Estado del combustible
  const [planetasVisitados, setPlanetasVisitados] = useState([]);
  const [estadoNave, setEstadoNave] = useState('En vuelo');

  useEffect(() => {
    console.log("¡El panel está listo!"); // Montaje

    const intervalo = setInterval(() => { // Montaje
      // ... (simulación de vuelo)
      console.log("Simulando vuelo..."); // Simulación de vuelo
      // Aquí podrías actualizar el estado de la nave, combustible, etc.
      setCombustible((prev) => Math.max(prev - 1, 0));
      if (combustible <= 0) {
        console.log("¡Combustible agotado!"); // Combustible agotado
        setEstadoNave('Aterrizada'); // Actualizar estado de la nave
        clearInterval(intervalo); // Detener el intervalo si el combustible se agota
        return;
      }
      // Simular la visita a un planeta
      setPlanetasVisitados((prev) => [...prev, `Kepler - ${Math.floor(Math.random() * 100)} (${new Date().toLocaleTimeString()}) `]);
      setEstadoNave('En vuelo'); // Actualizar estado de la nave
      console.log(`Estado de la nave: ${estadoNave}`); // Estado de la nave
      console.log(`Combustible restante: ${combustible}`); // Combustible restante
      console.log(`Planetas visitados: ${planetasVisitados.join(', ')}`);
    }, 1000);

    return () => {
      clearInterval(intervalo); // Desmontaje
      console.log("El panel se ha apagado."); // Desmontaje
    };
  }, [combustible, estadoNave, planetasVisitados]); // Dependencias del efecto

  useEffect(() => {
    console.log("¡Combustible actualizado!"); // Actualización
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  return (
    <>
      <section className="panel">
        <div>{mensajeEstado}</div>
        <div>Combustible: {combustible}</div>
          
      </section>
      <section className="planetas">
        <div>Planetas visitados:</div>
        {planetasVisitados.map((planeta, index) => (
          <Planeta key={index} nombre={planeta} />
        ))}
      </section>
    </>
  );
}
export default App;