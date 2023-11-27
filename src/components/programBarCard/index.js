import React from "react";
import Text from "../text";
import './programBarCard.scss';

const ProgressBarCard = props => {
    return(
        <>
            <div className="progress-bar-wrapper" {...props}>
                <Text
                    type="PARAGRAPH"
                    className="progress-bar-text"
                    text={`Uploading.... ${props.width}% Completed`}
                />
                <div class="progress-bar-main">
                    <div 
                        class="progress-bar" 
                        role="progressbar" 
                        aria-label="Example with label" 
                        style={{width: `${props.width}%`}} 
                        aria-valuenow="25" 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                        >
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgressBarCard;

ProgressBarCard.defaultProps = {
    width: '25'
}