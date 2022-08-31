import Item from "../ItemCard/Item";
const ItemList = ({items}) => {
  return (
<div>
{items.map((item) =>{
    return(
    <Item item={item}/>
    )})}

</div>

    
    
  )};
export default ItemList