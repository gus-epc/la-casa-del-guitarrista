import { Link } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";

const Category = ({object}) => {
 
        return(
         <>
        {object.map(({modelo, precio, imgSrc}) => {
            return(
                
                <div className="m">
        <img className="marca" src={imgSrc}></img>
        <h5>{modelo}</h5>
        <p>${precio}</p>
        <Link to={`/item/${modelo}`}  element={<ItemDetailContainer/>}>
        <button  type="button" className="btn btn-success" >Detalles del Producto</button>
        </Link>
        </div>  
)})}
</>   
)};


export default Category