import { CombGanadoras } from "./Constantes";
import { Cuadrado } from "../Components/Cuadrado";

export const HuboGanador =(TableroRevisar)=>{
    for(const combinacion of CombGanadoras){
      const [a,b,c] = combinacion;
      if(
        TableroRevisar[a]!=null &&
        TableroRevisar[a]===TableroRevisar[b] &&
        TableroRevisar[a]===TableroRevisar[c]
      ){
        return TableroRevisar[a];
      }
    }
    return null;
  }

export const juegoTerminado=(nuevoTablero)=>{
    return nuevoTablero.every((Cuadrado)=> Cuadrado != null)
}