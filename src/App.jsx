import { useState } from "react";
import confetti from "canvas-confetti";
import { Cuadrado } from "./Components/Cuadrado";
import { TURNOS } from "./logic/Constantes";
import { ModalGanador } from "./Components/ModalGanador";
import { HuboGanador } from "./logic/Tablero";
import { juegoTerminado } from "./logic/Tablero";

function App() {
  const [tablero,setTablero] = useState(Array(9).fill(null));

  const [turno,setTurno] = useState(TURNOS.X);

  const [ganador,setGanador] = useState(null)

  const actualizarTablero =(index)=>{
    //verifica que no halla nada en esa posicion
    if(tablero[index]!=null || ganador!=null){ 
      return;
    }
    //actualiza el tablero
    const nuevoTablero = [...tablero];
    nuevoTablero[index]=turno;
    setTablero(nuevoTablero);

    //actualiza los turnos
    const nuevoTurno = turno === TURNOS.X ? TURNOS.O : TURNOS.X;
    setTurno(nuevoTurno);

    const nuevoGanador = HuboGanador(nuevoTablero);
    if(nuevoGanador!=null){
      confetti();
      setGanador(nuevoGanador);
    }else if(juegoTerminado(nuevoTablero)){
      setGanador(false);
    }
  }

  const empezarDeNuevo =()=>{
    setTablero(Array(9).fill(null));
    setTurno(TURNOS.X);
    setGanador(null)
  }

  return (
    <main className="board">
      <h1>Ta Te Ti</h1>
      <header>
        <button onClick={empezarDeNuevo}>Reiniciar juego</button>
      </header>
      <section className="game">
        {
          tablero.map((_,index)=>{
            return(
              <Cuadrado 
              key={index} 
              index={index}
              actualizarTablero={actualizarTablero}>
                {tablero[index]}
              </Cuadrado>
            )
          })
        }
      </section>
      <section className="turn">
        <Cuadrado seleccionado={turno === TURNOS.X}>
          {TURNOS.X}
        </Cuadrado>

        <Cuadrado seleccionado={turno === TURNOS.O}>
          {TURNOS.O}
        </Cuadrado>
      </section>

       <ModalGanador empezarDeNuevo={empezarDeNuevo} ganador={ganador}/> 
    </main>
  )
  
}


export default App
