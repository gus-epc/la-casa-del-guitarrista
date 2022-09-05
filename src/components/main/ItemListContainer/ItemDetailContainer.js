import { useEffect,useState } from "react";
import productos from "./productos";
import ItemDetail from "./ItemDetail";
function ItemDetailContainer () {

    let vista = "none"
    const [items, setItems] = useState([]);

    useEffect(()=> {
        const renderProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })
    renderProducts
    .then((result) => {
        setItems(result.find((producto) => producto.id ==4));
    }).catch((err) => {

    });}, []);

    return(
        <section id="marcas">
        <ItemDetail items={items}/>
        </section>            
    );
};
export default ItemDetailContainer;