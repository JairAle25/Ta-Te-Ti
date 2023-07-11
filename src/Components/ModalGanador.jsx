import { Cuadrado } from "./Cuadrado";

export function ModalGanador ({empezarDeNuevo,ganador}){

    if(ganador===null) return null;

    const texto = ganador==false ? 'Empate' : 'Gano:'

    return(
      <section className="winner">
        <div className="text">
          <h2>{texto}</h2>

          <header className="win">
            {ganador && <Cuadrado>{ganador}</Cuadrado>}
          </header>

          <footer>
            <button onClick={empezarDeNuevo}>Juegar de nuevo</button>
          </footer>
        </div>
      </section>
    )
}