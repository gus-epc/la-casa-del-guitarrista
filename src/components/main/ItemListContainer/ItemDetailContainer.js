import { useEffect,useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
function ItemDetailContainer ({marca}) {
console.log(marca); // No logro pasar el array hasta este punto
    const itemUrl = useParams()


    const [itemsDt, setItems] = useState([]);

    useEffect(()=> {
        const renderItemDetail = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(marca)
        }, 2000);
    })
    renderItemDetail
    .then((result) => {
        setItems(result.find((marca) => marca.modelo == itemUrl));
    }).catch((err) => {

    });}, []);

    return(
        <section id="marcas">
        <ItemDetail itemDt={itemDt}/>
        </section>            
    );
};
export default ItemDetailContainer;