import logo from "./logo.svg";
import "./App.css";
import Ejemplo from "./hooks/Ejemplo";
import Ejemplo2 from "./hooks/Ejemplo_2";
import MiComponenteConContexto from "./hooks/Ejemplo_3";
import Ejemplo4 from "./hooks/Ejemplo_4";
import TaskListComponent from "./components/container/task_list";
import GreetingStyled from "./components/pure/greetingStyled";
import Father from "./components/container/father";
import OptionalRender from "./components/pure/optionalRender";
import Ejercicio12 from "./components/pure/ejecicios/ejercicio12";
import CardContainer from "./components/pure/ejecicios/jokesCard";
import LoginFormik from "./components/pure/forms/loginFormik";
import RegisterFormik from "./components/pure/forms/registerFormik";
import TaskFormik from "./components/pure/ejecicios/ejercicio15";
import AsyncExample from "./components/pure/AsyncExample";
import ObservableExample from "./components/pure/ObservableExample";
import FetchExample from "./components/pure/FetchExample";
import AxiosExample from "./components/pure/axioExample";

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
      {/* Gestión de eventos */}
      {/* <Father></Father> */}
      {/* <Ejercicio12></Ejercicio12> */}
      {/* Ejemplos de uso de FORMIK y Yup  */}
      {/* <LoginFormik></LoginFormik> */}
      {/* <RegisterFormik></RegisterFormik> */}
      {/* <TaskFormik></TaskFormik> */}
      {/* Ejemplos de procesos asíncronos */}
      {/* <AsyncExample></AsyncExample> */}
      {/*Ejemplos de Observables rxjs   */}
      {/* <ObservableExample></ObservableExample> */}
      {/* <FetchExample></FetchExample> */}
      {/* <AxiosExample></AxiosExample> */}
      <CardContainer />
      {/* ----------------PROYECTO FINAL */}
      {/* <TaskListComponent></TaskListComponent> */}
      {/* ------------------------------ */}
    </div>
  );
}

export default App;
