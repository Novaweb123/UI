import React from "react";
import './status.scss';

const Status = props => {
    return(
        <div className="status-wrapper" {...props}>
            {props.status == '0' || props.status == '-1' && (
                <div className="disabled">Disabled</div>
            )}
            {props.status == '1' && (
                <div className="active">Active</div>
            )}
            {props.status == '2' && (
                <div className="inactive">Inactive</div>
            )}
        </div>
    )
}

export default Status;
