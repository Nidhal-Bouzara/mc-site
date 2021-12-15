import React from 'react';

// Styling
import heroStyle from './HeroSection.module.scss';

const HeroSection = () => {
    return (
        <section className={heroStyle.heroContainer}>
            <div className={heroStyle.content}>
                <h1 className={heroStyle.headline}>We Help Students Navigate the Tech Universe</h1>
                <h3 className={heroStyle.description}>We're a student club located in USTHB, ready to help students get started in the Tech field</h3>
                <div className={heroStyle.buttonsContainer}>
                    <button className={heroStyle.buttonMain}>Our Events</button>
                    <button className={heroStyle.buttonSecondary}>Club Structure</button>
                </div>
                <div className={heroStyle.scrollContainer}>
                    <div className={heroStyle.scrollIndicator}></div>
                    <span className={heroStyle.scrollText}>Scroll Down</span>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
