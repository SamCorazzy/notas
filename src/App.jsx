import { useState } from "react";

function App() {

  //TODO: Presentar el concepto "State"

  //hooks
  const [inputState, setInputState] = useState({
    titulo: "",
    fecha: "",
    nota: "",
  });

  const initialState = JSON.parse(localStorage.getItem("notas")) || [];
  const [notas, setNotas] = useState(initialState);

  // const [fechaState, setFechaState] = useState("Fecha");
  // const [notaState, setNotaState] = useState("Nota");


  const handleInputChange = (event) => {
    //console.log(event.target)
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
    console.log(inputState);
  };

  const handleClicNota = (index) =>{
    setInputState({...notas[index]})
  }

  const handleResetChange = () => {
    setInputState({
      ...inputState,
      titulo: "",
      fecha: "",
      nota: "",
    });
  };

  const handleResetList = () => {
    setNotas([]);
    localStorage.setItem("notas", JSON.stringify([]));
  };



  const handleClicGuardar = () => {
    setNotas([...notas, inputState]);
    localStorage.setItem("notas", JSON.stringify([...notas, inputState]));
    handleResetChange();
  };

  const handleBorrarNota = (index) => {
    const nuevoArreglo = [];
    
    notas.forEach((nota,i) => {
      if(index !== i){
        nuevoArreglo.push(nota);
      }
    });
    localStorage.setItem("notas", JSON.stringify(nuevoArreglo));
    setNotas([...nuevoArreglo])
  };

  //  const handleChangeFecha = (event) => { 
  //   setFechaState(event.target.value);
  //   console.log(fechaState);
  //  }

  //  const handleChangeNota = (event) => { 
  //   setNotaState(event.target.value);
  //   console.log(notaState);
  //  }

  return (
    <div className="card shadow App container mt-4">
      <div className="row">
        <div className="card col p-4">
          <h3 className="text-center"><i class="bi bi-list-ol text-light bg-dark rounded px-1"></i> Lista</h3>
          {
            notas.length === 0 ?
            "Al momento no tienes notas guardadas. Puedes crear una en el formulario contiguo."
            :
            (
              <ol>
                {notas.map((item,index) => {
                  return(
                    <li key={index} onClick={() => handleClicNota(index)} style={{cursor:"pointer"}}>
                      {item.titulo} ({item.fecha}) ({item.nota})&nbsp;
                      <i class="bi bi-x-circle-fill" 
                      style={{color:"red", fontSize:"0.75rem", cursor:"pointer"}} 
                      onClick={() => handleBorrarNota(index)}>{/*Para invocar la funcion inmediatamente*/}
                      </i>
                    </li>
                  );
                })
                }
              </ol>
            )
          }
          {/* {
            arregloNotas.length !== 0 &&(
              <ol>
                {arregloNotas.map((item) => {
                  return(
                    <li>
                      {item.titulo} ({item.fecha}) ({item.nota})
                    </li>
                  );
                })
                }
              </ol>
            )
          } */}

          <hr />
          <div className="ms-2 me-2 mt-2 row">
            <div className="col">
              <span className="row mx-1">
                <button 
                class="shadow mx-auto btn btn-outline-danger" 
                onClick={handleResetList} 
                disabled={notas.length===0}
                style={{ marginLeft: "15px" }}>
                  <i class="bi bi-eraser-fill"></i>
                  Borrar lista
                  </button>
              </span>

            </div>
            </div>



        </div>
        <div className=" card col text-center mx-auto p-4">
          <h3><i class="bi bi-person-plus-fill"></i> Notas</h3>
          <label htmlFor="titulo" className="pe-4" style={{ width: "100%" }}><i class="bi bi-chat-left-text-fill"></i> Input de titulo:</label>
          <input
            id="titulo"
            name="titulo"
            type="text"
            className="text-center mb-3"
            style={{ width: "100%" }}
            onChange={handleInputChange}
            value={inputState.titulo}
          />
          <label htmlFor="fecha" className="pe-4" style={{ width: "100%" }}><i class="bi bi-calendar-event-fill"></i> Input de fecha:</label>
          <input
            id="fecha"
            name="fecha"
            type="date"
            className="text-center mb-3"
            style={{ width: "100%" }}
            onChange={handleInputChange}
            value={inputState.fecha}
          /> <br /><br />
          <label htmlFor="nota" className="pe-4" style={{ width: "100%" }}><i class="bi bi-chat-square-dots-fill"></i> Input de nota:</label>
          <textarea
            id="nota"
            name="nota"
            className="text-center mb-3"
            style={{ width: "100%" }}
            onChange={handleInputChange}
            value={inputState.nota}
          />
          <br />
          <hr />
          <div className="ms-2 me-2 mt-2 row">
            <div className="col">
              <span className="row mx-1">
                <button 
                class="shadow mx-auto btn btn-outline-danger" 
                disabled={inputState.titulo==="" || inputState.fecha==="" || inputState.nota===""} 
                onClick={handleResetChange} style={{ marginLeft: "15px" }}>
                <i class="bi bi-eraser-fill"></i>Borrar
                </button>
              </span>

            </div>
            <div className="col">
              <span className="row mx-1">
                <button 
                class="shadow mx-auto btn btn-outline-success" 
                disabled={inputState.titulo==="" || inputState.fecha==="" || inputState.nota===""} 
                onClick={handleClicGuardar} 
                style={{ marginLeft: "15px" }}>
                <i class="bi bi-pencil-fill"></i> Guardar</button>
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
//getbootstrap.com