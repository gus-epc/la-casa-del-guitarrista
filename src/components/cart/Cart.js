import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
function Cart() {
  const compraTerminada = () =>{
    alert("Su compra se ha realizado exitosamente")
  } 
  const {cart, clear, removeItem, totalCarrito, totalItemsCarrito} = useContext(CartContext)

  if (cart.length === 0) {
  return(
    <>
    <h2>Tu carrito está vacio</h2>
    <Link to="/" ><h2>Haz clic aquí para agregar algo</h2></Link>
    </>
  )    
  }
  else{

  return (

    

    <div id="productos">
    {cart.map((item)=>{
      return(
        
        <div id={item.modelo} className="producto-nuevo">
        <img src={item.imgSrc} alt="${titulo}" style={{width: "20vw"}}></img>
        <h5>${item.modelo}</h5>
        <p className="costo-producto">${item.precio}</p>
        <p  className="cantidad">Cantitdad: {item.count}</p>
        <p className="costo-producto">Sub total: ${item.precio * item.count}</p>
        <button onClick={()=>removeItem(item.id)} type="button" className="btn btn-danger">Eliminar</button>
        </div>
     )})}

      <div id="carrito" >
        <h3 id="total">Total = ${totalCarrito()}</h3>
        <p>Su carrito consta de {totalItemsCarrito()} productos</p>
        <button onClick={compraTerminada} type="button" id="comprar" class="btn btn-secondary">Terminar mi compra</button>
        <button onClick={clear}type="button" id="comprar" class="btn btn-secondary">Eliminar Carrito</button>
      </div>
       </div>       
  )
}}

export default Cart