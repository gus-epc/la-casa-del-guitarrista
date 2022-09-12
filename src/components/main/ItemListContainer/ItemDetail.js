import ItemCard from "./ItemCard/ItemCard";
function ItemDetail({marca}) {

  return (
    <div className="m">
  <img className="marca" src={marca.imgSrc}></img>
  <h5>{marca.modelo}</h5>
  <p>${marca.precio}</p>
  <p>{marca.descripcion}</p>
  <p>{marca.categoria}</p>
<ItemCard/>
    </div>
  )
}

export default ItemDetail