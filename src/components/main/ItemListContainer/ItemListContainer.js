import { useParams } from 'react-router-dom'
import { useEffect,useState } from "react";
import {collection, getDocs, query, where } from "firebase/firestore"
import { db } from '../../../firebaseConfig';
import Category from "../ItemListContainer/Category";

function ItemListContainer () {

    const {categoryName} = useParams()

    const [object, setItems] = useState([]);

    useEffect(()=> {
        const itemCollection = collection(db, "productos")
        const referencia = categoryName
        ? query(itemCollection, where("categoria", "==", categoryName))
        :itemCollection; 

        getDocs(referencia)
        .then((result)=>{
           const products = result.docs.map((prod)=>{
               return {
                   id: prod.id,
                   ...prod.data()
                  }
        })
        setItems(products);
        })
        .catch((error)=>{
            console.log(error);
        })
}, [categoryName]);


    return(
        <section id="marcas">
        <Category object={object}/>
        </section>            
    );
};
export default ItemListContainer;
// import { useEffect,useState } from "react";
// import productos from "./productos";
// import ItemList from "./productList/ItemList";
// const ItemListContainer = () => {
//   const [items, setItems] = useState([]);

//     useEffect(()=> {
//         const renderProducts = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(productos)
//         }, 2000);
//     })
//     renderProducts
//     .then((result) => {
//         setItems(result);
//     }).catch((err) => {
        
//     });}, []);
//     return(
//         <section id="marcas">
//         <ItemList items={items}/>
//         </section>            
//     );
// };