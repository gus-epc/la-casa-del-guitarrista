import Card from "./ItemCard"
const Item = ({item}) => {


  return (

    <div>
    <p>{item.title}</p>
    <p>${item.precio}</p>
    <p>{item.descripcion}</p>
    <img className="marca" src={item.src}></img>
    <p>{item.categoria}</p>
<Card/>
    </div>

  )
}
export default Item