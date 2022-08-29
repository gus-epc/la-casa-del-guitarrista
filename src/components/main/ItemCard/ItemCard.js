import ItemCount from "../counter/ItemCount";
const Card = () =>{
const onAdd = () =>{
  alert("Producto x se agregó al carrito")
}
 return ( 
    <div>
     <div className="card" style={{width: "28rem"}}>
  <div className="card-body">
    <h5 className="card-title">ProductoX</h5>
    <ItemCount stock={10} initial={1} onAdd={onAdd}/>
  </div>
</div>
    </div>
 )
};
export default Card;