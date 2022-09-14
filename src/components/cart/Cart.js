import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

function Cart() {
  const {cart, clear, removeItem} = useContext(CartContext)
  console.log(cart);
  return (
    <div id="productos">

    {cart.map((item)=>{
      return(
        
        <div id={item.modelo} className="producto-nuevo">
        <img src={item.imgSrc} alt="${titulo}" style={{width: "20vw"}}></img>
        <h5>${item.modelo}</h5>
        <p className="costo-producto">${item.precio}</p>
        <input type="number" className="cantidad" min="1" value={item.count}></input>
        <button onClick={()=>removeItem(item.id)} type="button" className="btn btn-danger">Eliminar</button>
        </div>
     )})}

      <div id="carrito" >
        <h3 id="total">Total = $0</h3>
        <button type="button" id="comprar" class="btn btn-secondary">Comprar</button>
        <button onClick={clear}type="button" id="comprar" class="btn btn-secondary">Eliminar Carrito</button>
      </div>
       </div>       
  )
}

export default Cart