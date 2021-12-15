import React from 'react';

// Styling
import cardStyle from './SponsorCard.module.scss';

const SponsorCard = ({title}) => {
    return (
        <div className={cardStyle.cardContainer}>
            <div className={cardStyle.imageContainer}>
                <div></div>
            </div>
            <h3 className={cardStyle.sponsorTitle}>{title}</h3>
        </div>
    );
}

export default SponsorCard;
