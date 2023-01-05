import React from "react";
import './style.css'
import avatar from '../../img/my_avatar.png';

const Header = () => {
    return ( 
        <header className="header">
        <div className="header__wrapper">
            <img src={avatar} className="my-avatar"/>
            <h1 className="header__title">
                <strong>Hi, my name is <em>Christina</em></strong> <br/>
                a frontend developer
            </h1>
            <div className="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a href="#!" className="btn">Download CV</a>
        </div>
    </header>
     );
}
 
export default Header;