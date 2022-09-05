import ItemCard from "./ItemCard"

const Item = ({item}) => {


  return (

    <div className="m" id={item.id}>
    <img className="marca" src={item.src}></img>
    <h5>{item.title}</h5>
    <p>${item.precio}</p>
    <p>{item.descripcion}</p>
    <p>{item.categoria}</p>
    <button  type="button" className="btn btn-success">Detalles del Producto</button>
<ItemCard/>
    </div>

  )
}
export default Item