import React from "react";
import "./Header.scss"
function Header() {
    return <header>
        <div className="logo">
            <p>RM</p>
        </div>
        <div className="page-navigator">
            <div className="page-type">
                <p className="type-text">Home</p>
            </div>
            <div className="page-type">
                <a href="section1" className="type-text">About</a>
            </div>
            <div className="page-type">
                <p className="type-text">Projects</p>
            </div>
            {/* <div className="page-type">
                <p className="type-text">Education</p>
            </div> */}
            <div className="page-type">
                <p className="type-text">Contact</p>
            </div>
        </div>
    </header>;
}

export default Header;
