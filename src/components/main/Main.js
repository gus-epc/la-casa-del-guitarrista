import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemListContainer/ItemDetailContainer";
import Cart from "../cart/Cart";
import {Routes, Route} from "react-router-dom";
function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer/> }/>
        <Route path="/category/:categoryName" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/> }/>
        <Route path="/cart" element={<Cart/> }/>  
      </Routes>
    </main>

  )
}

export default Main