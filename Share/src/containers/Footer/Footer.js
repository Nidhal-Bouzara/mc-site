import React from 'react';

// Styling
import footerStyle from './Footer.module.scss';

// Images
import fbIcon from './fbIcon-min.svg';
import instaIcon from './instaIcon-min.svg';
import linkedinIcon from './linkedinIcon-min.svg';
import mcLogo from './mcLogoFooter.svg';

const Footer = () => {
    return (
        <footer>
            <div className={footerStyle.socialContainer}>
                <h3 className={footerStyle.socialTitle}>You can find us on</h3>
                <ul className={footerStyle.socialLinks}>
                    <li>
                        <a href="https://www.facebook.com/Micro.Club.USTHB/">
                            <img className={footerStyle.socialIcon} src={fbIcon} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/microclub_usthb">
                            <img className={footerStyle.socialIcon} src={instaIcon} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/micro-club/">
                            <img className={footerStyle.socialIcon} src={linkedinIcon} alt="" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className={footerStyle.linking}>
                <div className={footerStyle.mcInfo}>
                    <a href="#root">
                        <img className={footerStyle.mcInfoLogo} src={mcLogo} alt="Micro Club Logo" />
                        <h3 className={footerStyle.mcInfoTitle}>Micro Club</h3>
                    </a>
                </div>
                <div className={footerStyle.mcLinks}>
                    <ul>
                        <li>
                            <a href="#aboutUs">Our Events</a>
                        </li>
                        <li>
                            <a href="#aboutUs">Club Structure</a>
                        </li>
                        <li>
                            <a href="#aboutUs">About Us</a>
                        </li>
                        <li>
                            <a href="#aboutUs">Our Sponsors</a>
                        </li>
                    </ul>
                </div>
                <div className={footerStyle.mcRegistration}>
                    <button className={footerStyle.button}>Register</button>
                    <span className={footerStyle.secondLine}>or <a className={footerStyle.link} href="#root">Log in</a></span>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
