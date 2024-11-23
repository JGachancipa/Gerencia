import React from 'react';
import '../styles/Header.css'; 
import icono from '../images/Logo.svg';

const Header = () => {
    return (
        <header className="header">
            <img src={icono} alt="Logo" className="logo" />
            <h1 className="title">HoriPoli</h1>
        </header>
    );
};

export default Header;
