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
                    <a className="type-text" href="#projects">Projects</a>
                </div>
                <div className="page-type">
                    <a className="type-text" href="#experiance">Experience</a>
                </div>
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
                        <a href="#home" onClick={breadcrumbHandler}>Home</a>
                        <a href="#projects" onClick={breadcrumbHandler}>About</a>
                        <a href="#Experiance" onClick={breadcrumbHandler}>Project</a>
                        <a href="#contact" onClick={breadcrumbHandler}>Contact</a>
                    </div>


                </div>
                : ''}
    </>

}

export default Header;
