import { useState } from "react";

function App() {

//TODO: Presentar el concepto "State"

//hooks
const [inputState, setInputState] = useState({
  titulo: "",
  fecha: "",
  nota: "",
});
// const [fechaState, setFechaState] = useState("Fecha");
// const [notaState, setNotaState] = useState("Nota");


  const handleInputChange = (event) => { 
    //console.log(event.target)
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
    console.log(inputState);
   }

  //  const handleChangeFecha = (event) => { 
  //   setFechaState(event.target.value);
  //   console.log(fechaState);
  //  }

  //  const handleChangeNota = (event) => { 
  //   setNotaState(event.target.value);
  //   console.log(notaState);
  //  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Notas</h1>
        <label htmlFor="titulo" className="pe-4">Input de titulo:</label>
        <input 
          id= "titulo" 
          name="titulo" 
          type="text" 
          onChange={handleInputChange}
          value={inputState.titulo}
        /> <br /><br />
        <label htmlFor="fecha" className="pe-4">Input de fecha:</label>
        <input 
          id= "fecha" 
          name="fecha" 
          type="text" 
          onChange={handleInputChange}
          value={inputState.fecha}
        /> <br /><br />
        <label htmlFor="nota" className="pe-4">Input de nota:</label>
        <input 
          id= "nota" 
          name="nota" 
          type="text" 
          onChange={handleInputChange}
          value={inputState.nota}
        />
      </header>
    </div>
  );
}

export default App;
//getbootstrap.com