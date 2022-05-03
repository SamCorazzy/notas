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
  };

  const handleResetChange = () => {
    setInputState({
      ...inputState,
      titulo: "",
      fecha: "",
      nota: "",
    });
  };


  let arregloNotas = JSON.parse(localStorage.getItem("notas")) || [];

  const handleClicGuardar = () => {
    arregloNotas.push(inputState);
    localStorage.setItem("notas", JSON.stringify(arregloNotas));
    handleResetChange();
  };

  const handleBorrarNota = (index) => {
    const nuevoArreglo = [];
    
    arregloNotas.forEach((nota,i) => {
      if(i !== index){
        nuevoArreglo.push(nota);
      }
    });
    localStorage.setItem("notas", JSON.stringify(nuevoArreglo));
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
          <h3 className="text-center"><i class="bi bi-list-ol"></i> Lista</h3>
          {
            arregloNotas.length === 0 ?
            "Al momento no tienes notas guardadas. Puedes crear una en el formulario contiguo."
            :
            (
              <ol>
                {arregloNotas.map((item,index) => {
                  return(
                    <li>
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
        </div>
        <div className=" card col text-center mx-auto p-4">
          <h3><i class="bi bi-person-plus-fill"></i> Notas</h3>
          <label htmlFor="titulo" className="pe-4" style={{ width: "100%" }}><i class="bi bi-chat-left-text-fill"></i> Input de titulo:</label>
          <input
            id="titulo"
            name="titulo"
            type="text"
            className="text-center"
            style={{ width: "100%" }}
            onChange={handleInputChange}
            value={inputState.titulo}
          /> <br /><br />
          <label htmlFor="fecha" className="pe-4" style={{ width: "100%" }}><i class="bi bi-calendar-event-fill"></i> Input de fecha:</label>
          <input
            id="fecha"
            name="fecha"
            type="date"
            className="text-center"
            style={{ width: "100%" }}
            onChange={handleInputChange}
            value={inputState.fecha}
          /> <br /><br />
          <label htmlFor="nota" className="pe-4" style={{ width: "100%" }}><i class="bi bi-chat-square-dots-fill"></i> Input de nota:</label>
          <input
            id="nota"
            name="nota"
            type="text"
            className="text-center"
            style={{ width: "100%" }}
            onChange={handleInputChange}
            value={inputState.nota}
          />
          <br />
          <hr />
          <div className="ms-2 me-2 mt-2 row">
            <div className="col">
              <span className="row mx-1">
                <button class="shadow mx-auto btn btn-outline-danger" onClick={handleResetChange} style={{ marginLeft: "15px" }}><i class="bi bi-eraser-fill"></i>Borrar</button>
              </span>

            </div>
            <div className="col">
              <span className="row mx-1">
                <button class="shadow mx-auto btn btn-outline-success" onClick={handleClicGuardar} style={{ marginLeft: "15px" }}><i class="bi bi-pencil-fill"></i> Guardar</button>
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