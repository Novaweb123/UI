import React from "react";
import './totalCard.scss';
import Text from "../text";

const TotalCard = props => {
    return(
        <>
            <div className={`total-card ${props.bgSuccessDark ? 'bg-success-dark' : 'bg-success-light'}`}>
                <div className="total-content-text">
                    <Text type="PARAGRAPH" text={props.text} className="my-0" />
                    <Text type="H2" text={props.number} className="mb-0" />
                </div>
                <div className="total-icon">
                    {props.icon}
                </div>
            </div>
        </>
    )
}

export default TotalCard;