import React from 'react';
import Logo from '../../assets/img/marcellecodeflix.png';
import './Menu.css';
import Button from '../ButtonLink/index';
function Menu() {
    return (
        <nav className="Menu">
            <a href="/">                
                <img className="Logo" src={Logo} alt="MarcelleCode flix logo"/>
            </a>

            <Button className="ButtonLink" href="/">                
                Hello World
            </Button>

        </nav>
    );
}

export default Menu;