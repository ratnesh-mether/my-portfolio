import React, { useState } from "react";
import "./Header.scss";
function Header() {
    const [breadcrumbFlag, setBreadcrumbFlag] = useState(false);
    const breadcrumbHandler = () => {
        setBreadcrumbFlag(!breadcrumbFlag);
    }
    return <>
        <header>
            {/* <div className="logo">
                <img src={logo} alt="Logo" />
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
            <div className="breadcrumb" onClick={breadcrumbHandler} >
                <hr />
                <hr />
                <hr />
            </div>

        </header>
        {
            breadcrumbFlag ?
                <div className="breadcrumb-menu">
                    <p className="close" onClick={breadcrumbHandler}>x</p>

                    <div className="options">
                        <p onClick={breadcrumbHandler}>Home</p>
                        <p onClick={breadcrumbHandler}>About</p>
                        <p onClick={breadcrumbHandler}>Project</p>
                        <p onClick={breadcrumbHandler}>Contact</p>
                    </div>


                </div>
                : ''}
    </>

}

export default Header;
