import type { CSSProperties } from "react";
import ItemCounter from "./shoping-cart/ItemCounter";

const bodyItemCounter:CSSProperties = {
  backgroundColor: '#e4e4e4',
  fontSize: 20,
  borderRadius: 20,
  padding:15
}

export function FirsSteps(){
    return (
        <>
            <h1>Ejercicio con ItemCounter</h1>
            <div style={bodyItemCounter}>Body del Item Counter</div> <br />
            <ItemCounter productName="Cebolla" productQuantity={5}/>
            <ItemCounter productName="Tomate" productQuantity={8}/>
            <ItemCounter productName="Pan" productQuantity={23}/>
            <ItemCounter productName="Lechuga" />
        </>
    )
}