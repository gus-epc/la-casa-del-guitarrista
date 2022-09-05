import ItemCount from "./ItemCount";
const ItemCard = () =>{
const onAdd = () =>{
  alert("Producto x se agregó al carrito")
}
 return ( 

     <div className="card bg-dark" style={{width: "25rem"}}>
    <ItemCount stock={10} initial={1} onAdd={onAdd}/>
</div>

 )
};
export default ItemCard;