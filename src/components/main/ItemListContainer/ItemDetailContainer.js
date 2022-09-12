import { useEffect,useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Marcas from "../Marcas";
function ItemDetailContainer (propObj) {
console.log(propObj);//no pasa la prop :(
    const itemUrl = useParams()

    const [object, setItems] = useState([]);

    useEffect(()=> {
        const renderItemDetail = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Marcas[0])
        }, 2000);
    })
    renderItemDetail
    .then((result) => {
        setItems(result.find((object) => object.modelo == itemUrl.id));
    }).catch((err) => {

    });}, []);

    return(
        <section id="marcas">
        <ItemDetail marca={object}/>
        </section>            
    );
};
export default ItemDetailContainer;