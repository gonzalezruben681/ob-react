import React, { useState } from 'react';
// definiendo estilos para en constantes:
// ? Estilo para usuario logueado
const loggedStyle = {
    color:'white'
};
// ? Estilo para usuario no logueado
const unloggedStyle = {
    color:'tomato',
    fontWeight:'bold'

}

const GreetingStyled = (props) => {
// Generamos un estado para el componente
// y  así controlar si el usuario está o no logueado

// const greetingUser = ()=> (<p>Hola, {props.name}</p>);
// const pleaseLogin = () => (<p>Please login</p>);

const [logged, setLogged] = useState(false);
    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
        { 
            logged ? (<p>Hola, {props.name}</p>):(<p>Please login</p>)
        }
            <button onClick={()=>{
                console.log('Botón pulsado');
                setLogged(!logged);
            }}>
                {logged ? 'Logout':'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
