import logo from './logo.svg';
import './App.css';
import Ejemplo from './hooks/Ejemplo';
import Ejemplo2 from './hooks/Ejemplo_2';
import MiComponenteConContexto from './hooks/Ejemplo_3';
import Ejemplo4 from './hooks/Ejemplo_4';
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import Ejercicio12 from './components/pure/ejecicios/ejercicio12';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       {/* Ejemplos de uso de hooks */}
       {/* <Ejemplo></Ejemplo> */}
       {/* <Ejemplo2></Ejemplo2> */}
       {/* <MiComponenteConContexto></MiComponenteConContexto> */}
       {/* Todo lo que hay aquí, es tratado como props.children */} 
       {/* 
       <Ejemplo4 nombre="Rubén">
        <h3>
          Contenido del props.children
        </h3>
       </Ejemplo4>
        */}
        {/* <GreetingStyled name="Martín"></GreetingStyled> */}
      {/* </header> */}
      {/* Ejemplos de Renderizado condicional */}
      {/* <OptionalRender></OptionalRender> */}

      {/* ----------------PROYECTO FINAL */}
       <TaskListComponent></TaskListComponent>
       {/* ------------------------------ */}
       {/* Gestión de eventos */}
       {/* <Father></Father> */}
       {/* <Ejercicio12></Ejercicio12> */}
    </div>
  );
}

export default App;
