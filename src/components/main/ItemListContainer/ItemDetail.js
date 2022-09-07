import ItemCard from "./ItemCard/ItemCard";
function ItemDetail({itemDt}) {
console.log(itemDt);
  return (
    <div className="m">
    <img className="marca" src={marca.src}></img>
    <h5>{marca.title}</h5>
    <p>${marca.precio}</p>
    <p>{marca.descripcion}</p>
    <p>{marca.categoria}</p>
    <button  type="button" className="btn btn-success">Detalles del Producto</button>
<ItemCard/>
    </div>
  )
}

export default ItemDetail