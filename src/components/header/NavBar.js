const Header = () =>{
    return (<header>
        <nav>
            <a href="./index.html">La Casa Del Guitarrista</a>
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <ul>
                    <li><a className="nav-link" href="./nosotros.html">Nosotros</a></li>
                    <li><a className="nav-link" href="./servicios.html">Servicios</a></li>
                    <li><a className="nav-link" href="./tienda.html">Tienda</a></li>
                    <li><a className="nav-link" href="./contacto.html">Contacto</a></li>
                </ul>
            </div>  
            </div>
          </div>
           </nav>
      </header>);
};
export default Header;