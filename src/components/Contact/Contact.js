import React, { useEffect } from "react";
import './Contact.scss';
import Aos from "aos";
import 'aos/dist/aos.css';
import { EMAIL_DATA, PHONE_NUMBER, QR } from "../../utilities/Constants";
import { useSelector } from "react-redux";
function Contact() {
    const darkModeFlag = useSelector(state => state.slice.darkModeFlag)
    useEffect(() => {
        Aos.init();
    }, [])
    const composeEmail = () => {
        const mailtoLink = `mailto:${EMAIL_DATA.recipient}?subject=${encodeURIComponent(EMAIL_DATA.subject)}&body=${encodeURIComponent(EMAIL_DATA.body)}`;
        window.open(mailtoLink, '_blank');
    };
    const handleCall = () => {
        window.location.href = `tel:${PHONE_NUMBER}`;
    };
    return <main className={"contact-component " + (darkModeFlag ? "dark-mode-contact" : "")}>
        <div className="text-container">
            <p className="name"><span className="icon">&#128126;</span>Ratnesh Shashikant Mether</p>
            <p className="designation"><span className="icon">&#128187;</span>Frontend Developer</p>
            <p onClick={composeEmail}><span className="icon">&#128233;</span><span className="link">metherratnesh@gmail.com</span></p>
            <p onClick={handleCall}><span className="icon">&#128222;</span><span className="link" >9922040096</span></p>
        </div>
        <hr />
        {/* data-aos="flip-up" data-aos-offset='200' */}
        <div className="qr-container" >
            <div className="qr-img">
                <img src={QR} alt="qr-code" />
            </div>
            <p className="qr-text"> <a href="https://me-qr.com/entry/vcard/eN7UgX27" target="_blanl" rel="noreferrer"><span>&#128073;</span> Click Here</a> or Scan the QR!</p>
            {/* https://me-qr.com/entry/vcard/eN7UgX27 */}
        </div>
    </main>;
}

export default Contact;
