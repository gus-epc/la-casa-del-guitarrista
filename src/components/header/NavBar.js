import Bag from "./CartWitget";
const Header = () =>{

    return (

      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src='https://scontent.fpbc6-1.fna.fbcdn.net/v/t1.6435-1/105991974_2899382556826738_1957006309471431825_n.jpg?stp=c28.24.146.146a_dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=jQNgQ4_PrmYAX_gPkue&_nc_ht=scontent.fpbc6-1.fna&oh=00_AT8upKuHvcJYj8yiMyia-BCv4hVKQiw0y7Md8NNYowE91w&oe=632C40D0'></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nosotros</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tienda
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Hannabach</a></li>
            <li><a className="dropdown-item" href="#">Savarez</a></li>
            <li><a className="dropdown-item" href="#">Knocloch</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">La casa del guitarrista MX</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <Bag/>
    </div>
  </div>
</nav>

      );
};
export default Header;