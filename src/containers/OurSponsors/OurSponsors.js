import React from 'react';

// Components 
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SponsorCard from '../../components/SponsorCard/SponsorCard';

// Styling
import sponsorStyling from './OurSponsors.module.scss';

const OurSponsors = () => {
    return (
        <section className={sponsorStyling.sponsorSection} id="ourSponsors">
            <SectionTitle
                title='OurSponsors'
                subTitle='They generously supported us on this journey'
                isDark={false}
            />
            <div className={sponsorStyling.sponsorGrid}>
                <SponsorCard
                    title='Brand Name'
                />
                <SponsorCard
                    title='Brand Name'
                />
                <SponsorCard
                    title='Brand Name'
                />
                <SponsorCard
                    title='Brand Name'
                />
                
            </div>
        </section>
    );
}

export default OurSponsors;
