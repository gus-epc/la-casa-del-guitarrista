
import Header from "./components/header/NavBar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import "./styles.css";
import {BrowserRouter} from "react-router-dom";
import CartProvider from "./Context/CartContext";
import CategoriaProvider from "./Context/CategoriaContext";
const App = () =>{
    return (
    <CartProvider>
    <CategoriaProvider>

        <BrowserRouter>
            <Header/>
            <Main/>
            <Footer/>
        </BrowserRouter>
    </CategoriaProvider>
    </CartProvider>

   );
};

export default App;