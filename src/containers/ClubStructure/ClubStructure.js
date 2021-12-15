import React from 'react';

// Components
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import DiagramItem from '../../components/DiagramItem/DiagramItem';

// Styles
import structureStyle from './ClubStructure.module.scss';

const ClubStructure = () => {
    return (
        <section className={structureStyle.structureSection} id="clubStructure">
            <SectionTitle
                title='Club Structure'
                subTitle='Read up on the internal workings of the club'
                isDark={false}
            />
            <div className={structureStyle.diagramContainer}>
                <DiagramItem
                    title='Game Development Department'
                    description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.'
                    gridArea='itemA'
                />
                <DiagramItem
                    title='Development Department'
                    description='Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.'
                    gridArea='itemB'
                />
                <DiagramItem
                    title='Multimedia Department'
                    description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.'
                    gridArea='itemC'
                />
                <DiagramItem
                    title='Design Department'
                    description='Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.'
                    gridArea='itemD'
                />
                <div className={structureStyle.line}></div>
            </div>
        </section>
    );
}

export default ClubStructure;
