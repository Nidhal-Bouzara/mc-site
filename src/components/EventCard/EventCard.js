import React from 'react';

// Styling
import cardStyle from './EventCard.module.scss';

const EventCard = ({imgUrl, imgAlt, title, description}) => {
    return (
        <div className={cardStyle.cardContainer}>
            <img className={cardStyle.cardImage} src={imgUrl} alt={imgAlt} />
            <div className={cardStyle.cardContent}>
                <div className={cardStyle.text}>
                    <h3 className={cardStyle.title}>{title}</h3>
                    <p className={cardStyle.description}>{description}</p>
                </div>
            </div>
                <div className={cardStyle.readMore}>
                    <button className={cardStyle.readMoreButton}>
                        <span>Read More</span>
                        <div className={cardStyle.buttonDecoration}></div>
                    </button>
                </div>
        </div>
    );
}

export default EventCard;
