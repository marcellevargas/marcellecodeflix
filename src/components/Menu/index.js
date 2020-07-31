import React from "react";
import Logo from "../../assets/img/marcellecodeflix.png";
import "./Menu.css";
import Button from "../ButtonLink/index";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className='Menu'>
      <Link to='/'>
        <img className='Logo' src={Logo} alt='MarcelleCode flix logo' />
      </Link>

      <Button as={Link} className='ButtonLink' to='/cadastro/video'>
        Cadastrar video
      </Button>
    </nav>
  );
}

export default Menu;
