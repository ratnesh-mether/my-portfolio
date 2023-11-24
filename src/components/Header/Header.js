import React from "react";
import "./Header.scss"
function Header() {
    return <>
        <header>
            {/* <div className="logo">
                <p>RM</p>
            </div> */}
            <div className="page-navigator">
                <div className="page-type">
                    <a className="type-text" href="#home">Home</a>
                </div>
                <div className="page-type">
                    <a className="type-text" href="#about">About</a>
                </div>
                <div className="page-type">
                    <a className="type-text" href="#projects">Projects</a>
                </div>
                {/* <div className="page-type">
                <p className="type-text">Education</p>
            </div> */}
                <div className="page-type">
                    <a className="type-text" href="#contact">Contact</a>
                </div>
            </div>
        </header>
    </>

}

export default Header;
