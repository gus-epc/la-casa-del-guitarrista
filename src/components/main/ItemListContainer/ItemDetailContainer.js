import { useContext, useEffect,useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Marcas from "../Marcas";
// import { CategoriaContext } from "../../../Context/CategoriaContext";
import { db } from '../../../firebaseConfig';
import {getDoc, doc, collection, } from "firebase/firestore"
function ItemDetailContainer () {
        const [object, setItems] = useState([]);
    const {id} = useParams()
    useEffect(()=> {
        const itemCollection = collection(db, "productos")
        const referencia = doc(itemCollection, id);
        getDoc(referencia)
        .then((result)=>{
            console.log(result);
            setItems({ id: result.id, ...result.data() });
        })
}, [id]);
    return(
        <section id="marcas">
        <ItemDetail marca={object}/>
        </section>            
    );
};
export default ItemDetailContainer;
// const{categoria}=useContext(CategoriaContext)

//     const itemUrl = useParams()
// console.log(itemUrl);
//     const [object, setItems] = useState([]);

//     useEffect(()=> {
//         const renderItemDetail = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(categoria)
//         }, 2000);
//     })
//     renderItemDetail
//     .then((result) => {
//         setItems(result.find((object) => object.modelo == itemUrl.id));
//     }).catch((err) => {

//     });}, []);
 