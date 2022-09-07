import ItemCard from "./ItemCard/ItemCard";
import { Link } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
const Category = ({marca}) => {

        return(
        <>
        {marca.map((marca)  => {
            return(
                
        <div className="m">
        <img className="marca" src={marca.imgSrc}></img>
        <h5>{marca.modelo}</h5>
        <p>${marca.precio}</p>
        <Link to={`/item/${marca.modelo}`} element={<ItemDetailContainer marca={marca}/>}>
        <button  type="button" className="btn btn-success" >Detalles del Producto</button>
        </Link>
    <ItemCard/>
        </div>  
)})}
</>

)};


export default Category