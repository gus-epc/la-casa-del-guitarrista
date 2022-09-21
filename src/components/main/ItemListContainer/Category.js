import { Link } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";

const Category = ({object}) => {
 console.log(object);
        return(
         <>
        {object.map(({id, modelo, precio, imgSrc}) => {
            return(
                
                <div className="m">
        <img className="marca" src={imgSrc}></img>
        <h5>{modelo}</h5>
        <p>${precio}</p>
        <Link to={`/item/${id}`}  element={<ItemDetailContainer/>}>
        <button  type="button" className="btn btn-success" >Detalles del Producto</button>
        </Link>
        </div>  
)})}
</>   
)};


export default Category