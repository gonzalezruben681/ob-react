/**
 * Ejemplo de uso del Hook useState
 * Crear un componente de tipo función y acceder a su estado
 * privado a través de un hook y, además, poder modificarlo
 */
import React, { useState } from "react";

const Ejemplo = () => {
  // Valor inicial para un contador
  const valorInicial = 0;
  // valor inicial para una persona
  const personaInicial = {
    nombre: "Rubén",
    email: "ruben@gmail.com",
  };
  /**
   * Queremos que el valor inical y persona inicial sean
   * parte del estado de lcomponente para así poder gestionar su cambio
   * y que éste se vea reflejado en la vista del componente.
   * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
   */
  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  /**
   * función para actualizar el estado privado que contiene el contador
   */
  function incrementarContador() {
    // ? funcionParaCambiar(nuevoValor)
    setContador(contador + 1);
  }

  /**
   * función para actualizar el estado de persona en el componente
   */
  function actualizarPersona() {
    setPersona({
      nombre: "Karla",
      email: "karla@gmail.com",
    });
  }

  return(
    <div>
        <h1>*** Ejemplo de useState() ***</h1>
        <h2>Contador: {contador}</h2>
        <h2>Datos de la persona:</h2>
        <h3>Nombre: {persona.nombre}</h3>
        <h4>Email: {persona.email}</h4>
        {/* Bloque de botones para actualizar el estado del componente */}
        <button onClick={incrementarContador}>Incrementar contador</button>
        <button onClick={actualizarPersona}> Actualizar persona </button>
    </div>
  ); 
}

export default Ejemplo;
