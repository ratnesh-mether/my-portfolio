import React from "react";
import './Footer.scss'
import { SOCIAL_LINKS } from "../../utilities/Constants";

function Footer() {
    const showSocialLinks = () => {
        return SOCIAL_LINKS.map((logoInfo) => {
            return <a href={logoInfo.url} target="_blank" rel="noreferrer" key={logoInfo.title}>
                <div className="logo-container">
                    <img src={logoInfo.logo} alt={logoInfo.title} />
                </div>
            </a>

        })
    }
    return <footer className="footer-component">
        <div className="logo-section">
            {showSocialLinks()}
        </div>
    </footer>
}

export default Footer;