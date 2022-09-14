import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import ItemCard from "./ItemCard/ItemCard";
function ItemDetail({marca}) {
const {addToCart} = useContext(CartContext)

  return (
    <div className="m">
  <img className="marca" src={marca.imgSrc}></img>
  <h5>{marca.modelo}</h5>
  <p>${marca.precio}</p>
  <p>{marca.descripcion}</p>
  <p>{marca.categoria}</p>
<ItemCard addToCart={addToCart} marca={marca}/>
    </div>
  )
}

export default ItemDetail