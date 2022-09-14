import { useParams } from 'react-router-dom'
import { useContext, useEffect,useState } from "react";
import Marcas from '../Marcas';
import Category from "../ItemListContainer/Category";
import { CategoriaContext } from '../../../Context/CategoriaContext';
function Marca () {

    const marcaUrl = useParams()
    let index = marcaUrl.categoryName


    const [object, setItems] = useState([]);

    useEffect(()=> {
        const renderMarca = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Marcas[index-1])
        }, 2000);
    })
    renderMarca
    .then((result) => {
       setItems(result)

    }).catch((err) => {
    

    });}, []);
    const {addToCategoria} = useContext(CategoriaContext)
    addToCategoria(object)
    return(
        <section id="marcas">
        <Category object={object}/>
        </section>            
    );
};
export default Marca