import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
const ItemCard = () =>{
  const [carrito, setCarrito] = useState(false)
  const onAdd = () =>{
 setCarrito(true)
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