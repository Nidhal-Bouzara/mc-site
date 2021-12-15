import React from 'react';

// Components
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import EventCard from '../../components/EventCard/EventCard';

// Styling
import eventsStyle from './OurEvents.module.scss';

// Images
import agcxEvent from './agcxEvent-min.png';
import mctfEvent from './MCTF3.0@2x.png';
import hacktoberEvent from './hacktoberEvent-min.png';
import redhatEvent from './redHatEvent-min.png';
import moonDec from './moonDec-min.png';

const divDecorationPositions =
    [
        {
            top: '7%',
            left: '-7%'
        },
        {
            top: '50%',
            left: '-10%'
        },
        {
            bottom: '-3%',
            left: '0'
        },
        {
            bottom: '0%',
            right: '3%'
        },
        {
            top: '35%',
            right: '-8%'
        },
        {
            top: '-3%',
            right: '-3%'
        },
        {
            top: '-2%',
            left: '55%'
        }
    ]

const divDecorationItems = (divDecorationPositions.map(item => (
    <div className="divDecoration" style={item}></div>
)))

divDecorationItems.push(
    (<img src={moonDec} className={eventsStyle.moonDec} alt='' style={{top: '-10%', right: '15%'}} />)
)

const OurEvents = () => {
    return (
        <section className={eventsStyle.eventsContainer}>
            {
                divDecorationItems
            }
            <SectionTitle
                title='Our Events'
                subTitle='Discover the Events we Hold Year Round'
                isDark={true}
            />
            <div className={eventsStyle.cardsContainer}>
                <EventCard
                    imgUrl={agcxEvent}
                    imgAlt='Algerian Game Challenge tenth edition banner'
                    title='Algerian Game Challenge'
                    description='A nation-wide game development contest held annually.'
                />
                <EventCard
                    imgUrl={mctfEvent}
                    imgAlt='Micro Capture the Club Event Banner'
                    title='Micro Capture the Club'
                    description='A nation-wide game development contest held annually.'
                />
                <EventCard
                    imgUrl={hacktoberEvent}
                    imgAlt='MC Hacktober Fest Event Banner'
                    title='MC Hacktober Fest'
                    description='A nation-wide game development contest held annually.'
                />
                <EventCard
                    imgUrl={redhatEvent}
                    imgAlt='MC RedHat Training Club Event Banner'
                    title='MC RedHat Training Club'
                    description='A nation-wide game development contest held annually.'
                />
                
            </div>
        </section>
    );
}

export default OurEvents;
