import { useEffect,useState } from "react";
import productos from "./productList/productos";
import ItemList from "./productList/ItemList";
const Main = () => {
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
console.log(items);
    return(
        <>
        <ItemList items={items}/>

       
        </>
    );
};
export default Main;