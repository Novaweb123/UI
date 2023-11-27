import React from "react";
import './card.scss';

const Card = props => {
    return(
        <div className={`card-box ${props.className ? props.className : ''}`}>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
} 

export default Card;