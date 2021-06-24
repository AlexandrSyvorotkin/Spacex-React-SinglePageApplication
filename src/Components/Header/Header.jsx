import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <header className="header">
                <img
                    src="img/logo.svg"
                    alt="Logo Space X"
                    className="logo"
                />
                <nav className="main-nav nav">
                    <ul className="list">
                        <li className="item">
                            <a href="#" className="item-link">Falcon 1</a>
                        </li>
                        <li className="item">
                            <a href="#" className="item-link">Falcon 9</a>
                        </li>
                        <li className="item">
                            <a href="#" className="item-link">Falcon Heavy</a>
                        </li>
                        <li className="item">
                            <a href="#" className="item-link">Updates</a>
                        </li>
                    </ul>
                </nav>
                <nav className="secondary-nav">
                    <ul className="list">
                        <li className="item">
                            <a href="#" className="item-link">Home</a>
                        </li>
                        <li className="item">
                            <a href="calendar.html" className="item-link">Calendar</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
