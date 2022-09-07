const Item = ({item}) => {

  return (

        <div className="m" id={item.id}>
        <img className="marca" src={item.src}></img>
        <h5>{item.title}</h5>
        </div>           
  )
}
export default Item