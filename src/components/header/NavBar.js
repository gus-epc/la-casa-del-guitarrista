import Bag from "./CartWitget";
const NavBar = () =>{

    return (

<header>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#0c0c0c"}} >
        <div className="container-fluid">
            <a className="navbar-brand" href="/index.html">
                <img src="https://scontent.fpbc6-1.fna.fbcdn.net/v/t1.6435-1/105991974_2899382556826738_1957006309471431825_n.jpg?stp=c28.24.146.146a_dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=jQNgQ4_PrmYAX_gPkue&_nc_ht=scontent.fpbc6-1.fna&oh=00_AT8upKuHvcJYj8yiMyia-BCv4hVKQiw0y7Md8NNYowE91w&oe=632C40D0" alt="" width="55" height="55"></img>       
            </a>              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="./nosotros.html">Nosotros</a> 
              <a className="nav-link" href="./servicios.html">Servicios</a>
              <a className="nav-link" href="./tienda.html">Tienda</a>
              <a className="nav-link" href="./contacto.html">Contacto</a>
          </div>
          <button id="car">
            <Bag/>            
          </button>

          </div>
        </div>
         </nav>

    </header>

      );
};
export default NavBar;