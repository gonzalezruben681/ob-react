/**
 * Ejemplo de uso de:
 * -- useState() -
 * -- useRef() - identifica y referencia valores en especifico de la vista 
 * -- useEffect() - sirve para controlar los cambios en la vista
 */

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {
    // vamos a crear dos contadores distintos
    // cada uno de un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);
    // Vamos a crear una referencia con useRef() para asociar una variable 
    // con un elemento del DOM del componente (vista HTML)
    const miRef= useRef();

    function incrementar1(){
        setContador1(contador1 + 1)
    }
    function incrementar2(){
        setContador2(contador2 + 1)

    }
    /**
     * Trabajando con useEffect()
     */
    /**
     * ? caso 1: Ejecutar SIEMPRE un snippet de código
     * cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que éste dentro del useEffect()
     */
    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //     console.log('Mostrando Referencia a elemento del DOM');
    //     console.log(miRef);
    // })
    /**
     * ? caso 2: Ejecutar solo cuando cambie el Contador1
     * cada vez que haya cambiado el contador 1, se ejecuta lo que diga useEffect()
     * En caso que de cambie el contador2, no habrá ejecución
     */
    
    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
    //         console.log('Mostrando Referencia a elemento del DOM');
    //         console.log(miRef);
    // },[contador1]);
    
    /**
     * ? caso 3: Ejecutar solo cuando cambie el Contador1 o contador2
     * cada vez que haya cambiado el contador 1, se ejecuta lo que diga useEffect()
     * cada vez que haya cambiado el contador 2, se ejecuta lo que diga useEffect()
     */
   useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2');
            console.log('Mostrando Referencia a elemento del DOM');
            console.log(miRef);
    },[contador1,contador2]);
    
    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
            Ejemplo de elemento referenciado
            </h4>
            <div>
            <button onClick={incrementar1}>Incrementar contador 1</button>
            <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
