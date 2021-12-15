import React from 'react';

// Components
import SectionTitle from '../../components/SectionTitle/SectionTitle';

// Styling
import aboutStyle from './AboutUs.module.scss';

// Images
import messengerGuest from './messengerCropped-min.png';
import messengerMCLogo from './messengerMCLogo-min.png';

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

const divDecorationItems = divDecorationPositions.map(item => (
    <div className="divDecoration" style={item}></div>
))

const messagesList = [
    {
        left: true,
        text: 'What is Micro Club? 🤔'
    },
    {
        left: false,
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    },
    {
        left: true,
        text: 'What are the activities the club offers? 📆'
    },
    {
        left: false,
        text: 'Iinvidunt ut labore et dolore magna aliquyam erat,sed diam voluptua.',
        case: 'start'
    },
    {
        left: false,
        text: 'Niggers aren\'t shit',
        case: 'middle'
    },
    {
        left: false,
        text: 'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum'
    },
    {
        left: true,
        text: 'How can I join? ✍️'
    },
    {
        left: false,
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    }
]

const messageItems = messagesList.map(item => {
    let style = {};
    switch (item.case) {
        case 'start':
            style = {
                borderRadius: '20px 20px 3px 20px',
                marginBottom: '0.5vw'
            }
            break;
        case 'middle':
            style = {
                borderRadius: '20px 3px 3px 20px',
                margin: '0.4vw 0'
            }
            break;
    
        default:
            break;
    }
    return (
        <div className={item.left? aboutStyle.messageLeft : aboutStyle.messageRight} style={style}>
            <p>{item.text}</p>
        </div>
    )
})
const AboutUs = () => {

    return (
        <section className={aboutStyle.aboutContainer} id="aboutUs">
            {
                divDecorationItems
            }
            <SectionTitle
                title='About Us'
                subTitle='Get to Know Mico Club Better'
                isDark={true}
            />
            <div className={aboutStyle.chat}>
                <div className={aboutStyle.chatStripe}>
                    <div className={aboutStyle.firstUser}>
                        <div className={`${aboutStyle.firstImageContainer} ${aboutStyle.imageContainer}`}>
                            <img
                                className={aboutStyle.guestImage}
                                src={messengerGuest}
                                alt="guest"
                            />
                        </div>
                        <span className={`${aboutStyle.firstUserTitle} ${aboutStyle.userTitle}`}>You</span>
                    </div>
                    <div className={aboutStyle.secondUser}>
                        <span className={`${aboutStyle.secondUserTitle} ${aboutStyle.userTitle}`}>Micro Club</span>
                        <div className={`${aboutStyle.imageContainer} ${aboutStyle.secondImageContainer}`}>
                            <img
                            className={aboutStyle.mcImage}
                            src={messengerMCLogo}
                            alt="guest"
                        />
                        </div>
                    </div>
                </div>
                <div className={aboutStyle.messages}>
                    {
                        messageItems
                    }
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
