
import Header from "./components/header/NavBar";
import ItemListContainer from "./components/main/ItemListContainer"
import "./styles.css";

const App = () =>{
    return (
    <>
        <Header/>
        <ItemListContainer saludo="Bienvenido a mi ecomerce"/>
    </>
   );
};

export default App;