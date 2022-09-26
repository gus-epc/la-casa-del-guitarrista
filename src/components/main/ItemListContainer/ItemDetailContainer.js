import { useEffect,useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
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
