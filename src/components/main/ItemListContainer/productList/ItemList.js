import Item from "../ItemCard/Item";
import { Link } from "react-router-dom";
const ItemList = ({items}) => {

  return (
<>
{items.map((item) =>{
    return(
      <Link to={"/category/" + item.id}>
        <Item item={item}/>
      </Link>
    )})}
</>
    
  )};
export default ItemList