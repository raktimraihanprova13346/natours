import React from 'react';
import "./index.scss"
import Logo from '../img/logo-white.png';

const headerUI = () => {
    return(
        <div className="header">
            <img src={Logo} alt="logo" className="header-logo" />
            <div className="header-textbox">
                <span className="header-textbox-first">Outdoors</span>
                <span className="header-textbox-second">is where life happens</span>
            </div>

            <a href="#" className="header-button btn-white"> Discover with US</a>
        </div>
    )
}

export default headerUI;