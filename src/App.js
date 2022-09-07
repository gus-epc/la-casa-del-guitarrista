
import Header from "./components/header/NavBar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import "./styles.css";
import {BrowserRouter} from "react-router-dom";
const App = () =>{
    return (
    <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
    </BrowserRouter>


   );
};

export default App;