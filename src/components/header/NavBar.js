import Bag from "./CartWitget";
import { Link } from "react-router-dom";
const NavBar = () =>{

    return (

<header>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#0c0c0c"}} >
        <div className="container-fluid">
          <Link to="/">
            <a className="navbar-brand">
                <img src="../assets/logoN.png" alt="" width="auto" height="50"></img>       
            </a>              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          </Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/category/hannabach"><a className="nav-link" >Hannabach</a> </Link>
              <Link to="/category/knobloch"><a className="nav-link" >Knobloch</a></Link>
              <Link to="/category/savarez"><a className="nav-link" >Savarez</a></Link>

              
          </div>
          <button id="car">
          <Link to="/cart"><Bag/></Link>         
          </button>

          </div>
        </div>
         </nav>

    </header>

      );
};
export default NavBar;