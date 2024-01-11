import React, { useState } from "react";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { setDarkThemeFlag } from "../../redux-state/slice";
function Header() {
    const [breadcrumbFlag, setBreadcrumbFlag] = useState(false);
    const breadcrumbHandler = () => {
        setBreadcrumbFlag(!breadcrumbFlag);
    }
    const dispatch = useDispatch();
    const darkModeFlag = useSelector(state => state.slice.darkModeFlag)
    const darkModeDispatchHandler = (flag) => {
        dispatch(setDarkThemeFlag(flag))
    }
    return <>
        <header className={darkModeFlag ? 'darkMode' : ''}>
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


            <button
                class="container"
                aria-label="Toggle color mode"
                title="Toggle color mode"
                onClick={() => darkModeDispatchHandler(!darkModeFlag)}
            >
                <div class={"sun " + (!darkModeFlag ? "visible" : "")}></div>

                <div class={"moon " + (darkModeFlag ? "visible" : "")}>
                    <div class="star"></div>
                    <div class="star small"></div>
                </div>
            </button>
            <div className="breadcrumb" onClick={breadcrumbHandler} >
                <hr />
                <hr />
                <hr />
            </div>

        </header>
        {
            breadcrumbFlag ?
                <div className={"breadcrumb-menu " + (darkModeFlag ? 'darkMode-breadcrumb' : '')}>
                    <p className="close" onClick={breadcrumbHandler}>x</p>

                    <div className="options">
                        <a href="#home" onClick={breadcrumbHandler}>Home</a>
                        <a href="#projects" onClick={breadcrumbHandler}>Projects</a>
                        <a href="#experiance" onClick={breadcrumbHandler}>Experience</a>
                        <a href="#contact" onClick={breadcrumbHandler}>Contact</a>
                    </div>


                </div>
                : ''}
    </>

}

export default Header;
