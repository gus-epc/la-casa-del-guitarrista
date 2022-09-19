import {createContext, useState} from 'react';

export const CartContext = createContext()
const CartProvider = (props) =>{
    const [cart, setCart] = useState([])
    const addToCart = (item, count)=>{
        if (isInCart(item.id)) {
            alert("este producto ya está en el carrito")
            sumarCount(item, count)
            alert("Se ha acttulizado la cantidad de este producto en el carrito")
        } else {
            setCart([...cart, {...item, count}])
        } 
    }
    const sumarCount = (item, count) =>{
        const carritoActualizado = cart.map((itemAct)=>{
            if (itemAct.id === item.id) {
                const itemActualizado = {
                    ...itemAct,
                    count: count
                }
                return itemActualizado
            } else {
                return itemAct
            }
        })
     setCart(carritoActualizado)
    }

    const removeItem = (itemId)=>{
        setCart(cart.filter(item => item.id !== itemId))

    }
    const clear = () =>{
        setCart([])
    }
    const isInCart = (itemId) =>{
        return cart.some((item) => item.id === itemId)
    }
    const cantidadTotalItem = (itemId) =>{
        const item = cart.find((item)=>item.id === itemId)
        return item?.count
    }
    const totalCarrito = () =>{
        let total = 0;
        cart.forEach((item)=>{
            total += item.precio * item.count 
            
        })
        return total
    }
    const totalItemsCarrito = ()=>{
        let total = 0;
        cart.forEach((item)=>{
            total += item.count
        })
        return total
        }
    
    return(
        <CartContext.Provider value={{cart, addToCart, clear, removeItem, cantidadTotalItem, totalCarrito, totalItemsCarrito}}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider