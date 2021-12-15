import React from 'react';

// Styling
import titleStyle from './SectionTitle.module.scss';

const SectionTitle = ({title, subTitle, isDark}) => {
    return (
        <React.Fragment>
            <div className={titleStyle.titleContainer}>
                <h2 className={!isDark? `${titleStyle.title} ${titleStyle.titleLight}` : titleStyle.title }>{title}</h2>
                <div className={!isDark? `${titleStyle.divider} ${titleStyle.dividerLight}` : titleStyle.divider}></div>
            </div>
            <h3 className={!isDark? `${titleStyle.subTitle} ${titleStyle.subTitleLight}` : titleStyle.subTitle}>{subTitle}</h3>
        </React.Fragment>
    );
}

export default SectionTitle;
