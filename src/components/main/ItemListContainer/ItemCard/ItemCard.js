import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

const ItemCard = ({addToCart, marca}) =>{


  const [carrito, setCarrito] = useState(false)
  const onAdd = (count) =>{
 setCarrito(true)
 addToCart(marca, count)
}
 return ( 

     <div className="card bg-dark" style={{width: "25rem"}}>
      {carrito
        ?<Link to="/cart">Ir al carrito</Link>
        :<ItemCount stock={10} initial={1} onAdd={onAdd}/>
      }
</div>

 )
};
export default ItemCard;