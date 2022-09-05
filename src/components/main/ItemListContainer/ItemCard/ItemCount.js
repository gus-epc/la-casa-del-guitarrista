import React, {useState} from 'react'
const ItemCount = ({stock, initial, onAdd}) =>{

    const [count, setCount] = useState(initial)
    const restar = () =>{
        if (count == 1) {
            setCount(count)
        }
        else{
                 setCount(count -1)   
        }

    }
    const sumar = () =>{
        if (count < stock) {
              setCount(count + 1)    
        } else {
            alert("stock no disponible")
        }
  
    }
    return(
        <div className="btn-group bg-black" role="group" aria-label="Basic mixed styles example">      
  <button onClick={restar}type="button" className="btn btn-danger">-</button>
  <p>{count}</p>
  <button onClick={sumar} type="button" className="btn btn-success">+</button>
    <div>
  <button onClick={onAdd} type="button" className="btn btn-success">Agregar al carrito</button>
</div>
</div>

    );
};
export default ItemCount;