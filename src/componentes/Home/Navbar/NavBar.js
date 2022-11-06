import CategoryButton from "../CategoryButton/CategoryButton";
import logo from '../../../assets/img/logo.png';
import '../Navbar/NavBar.scss'
import CartWidget from "../CartWidget/CartWidget";
import {Link, NavLink} from "react-router-dom"


function NavBar() {
    const tableros = "Tableros"
    const gokes = "Gokes"
    const piedras = "Piedras"

  return (
    <div className="NavBar">

      <Link to={`/`}><img src={logo} alt='logo kiai' className="ImgLogo"/></Link>

      <div className="NavMenu">
        <Link to={`category/tableros`}><CategoryButton text={tableros}/></Link>
        <Link to={`category/gokes`}><CategoryButton text={gokes}/></Link>
        <Link to={`category/piedras`}><CategoryButton text={piedras}/></Link>
      </div>

      <CartWidget/>

    </div>
  );
}

export default NavBar;