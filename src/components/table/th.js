import React from "react";
import Sort from "./sort";
import './th.scss';

const TH = props => {
    return(
        <th className={props.className ? props.className : ''}>
            <div className="th">
                {props.children}
                {!props.nosort && <Sort {...props} />}
            </div>
        </th>
    )
}

export default TH;
