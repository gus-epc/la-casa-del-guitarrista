import Item from "../ItemCard/Item";
const ItemList = ({items}) => {
  return (
<>
{items.map((item) =>{
    return(
    <Item item={item}/>
    )})}
</>
    
  )};
export default ItemList