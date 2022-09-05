import { useEffect,useState } from "react";
import productos from "./productos";
import ItemList from "./productList/ItemList";
const ItemListContainer = () => {
  const [items, setItems] = useState([]);

    useEffect(()=> {
        const renderProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })
    renderProducts
    .then((result) => {
        setItems(result);
    }).catch((err) => {
        
    });}, []);
    return(
        <section id="marcas">
        <ItemList items={items}/>
        </section>            
    );
};
export default ItemListContainer;