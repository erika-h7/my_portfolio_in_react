import React from 'react';
import {withRouter} from "react-router-dom";

// styles
import "./card-item.styles.scss";


const CardItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={ `${size} card-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>

        <div className="background-image" style={{ backgroundImage:`url(${imageUrl})`}}></div>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">Cooking"svg-icon"Paleo</span>
        </div>
        
    </div>
)

export default withRouter(CardItem);