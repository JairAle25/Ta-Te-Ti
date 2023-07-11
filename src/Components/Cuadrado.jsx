export const Cuadrado = ({children,index,seleccionado,actualizarTablero}) =>{
    const NombreClase = `square ${seleccionado ? 'is-selected' : ''} `
  
    const Click =()=>{
      actualizarTablero(index)
    }
  
    return(
      <div onClick={Click} className={NombreClase}>
        {children}
      </div>
    )
  }