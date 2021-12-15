import React from 'react';

// Styling
import itemStyle from './DiagramItem.module.scss';

const DiagramItem = ({title, description, gridArea}) => {
    return (
        <div
            className={itemStyle.diagramItem}
            style={{
                gridArea: gridArea
            }}
        >
            <h2 className={itemStyle.diagramTitle}>{title}</h2>
            <p className={itemStyle.diagramDescription}>{description}</p>
            <div className={itemStyle.decoration}></div>
        </div>
    );
}

export default DiagramItem;
