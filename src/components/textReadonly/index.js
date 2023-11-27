import React from "react";
import Text from "../text";
import './textReadonly.scss';

const TextReadonly = props => {
    return(
        <div className="text-readonly-item">
            <label className="text-readonly-item-label">{props.label}</label>
            {props.text && <Text type="H4" text={props.text} className={`text-readonly-item-title ${props.ellipsis ? 'text-ellipsis':''} ${ props.className}` } />}
            {props.children}
        </div>
    )
}

export default TextReadonly;
