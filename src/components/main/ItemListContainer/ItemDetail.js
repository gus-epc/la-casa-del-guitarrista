import ItemCard from "./ItemCard/ItemCard";
const ItemDetail = ({items}) => {
        return(
        <div className="m">
        <img className="marca" src={items.src}></img>
        <h5>{items.title}</h5>
        <p>${items.precio}</p>
        <p>{items.descripcion}</p>
        <p>{items.categoria}</p>
        <button  type="button" className="btn btn-success">Detalles del Producto</button>
    <ItemCard/>
        </div>
)};


export default ItemDetail