import {createContext, useState} from 'react';

export const CategoriaContext = createContext()
const CategoriaProvider = (props) =>{
    const [categoria, setCategoria] = useState([])
    const addToCategoria = (object)=>{
        setCategoria(object)

    }

    return(
        <CategoriaContext.Provider value={{categoria, addToCategoria}}>
            {props.children}
        </CategoriaContext.Provider>
    )
}
export default CategoriaProvider
