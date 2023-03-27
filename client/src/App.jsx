
import './App.css';
// import React, {useState, useEffect} from "react"
import Register from "./Components/Register/Register"
import Login from './Components/Login/Login';

function App() {

// const [count, setCount] = useState(0)

// useEffect(() => {
//   console.log("Hello, hello" + count)
// }, [count]) 

// const increment = () => {
//   setCount(count + 1)
// }
// const decrement = () => {
//   setCount(count - 1)
// }

// const EstadoInicial = ({
//   name: "Juan",
//   age: 15
// })

// const [persona, setPersona] = useState(EstadoInicial)

// const changePersons = () => {
//   setPersona({
//     name: "Lorena",
//     age: 25
//   })
// }



  return (
    <div className="App">
      <Register></Register>
      <Login></Login>
      {/* <p>Nombre: {persona.name}</p>
      <p>Edad: {persona.age}</p>
      <button onClick={changePersons} className="button">Change Person</button> 
      <p>El valor del contador es: {count}</p>
      <button onClick={increment} className="button">Incrementar</button>
      <button onClick={decrement} className="button">Decrementar</button> */}

      

    </div>
  );
}

export default App;
