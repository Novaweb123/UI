import React from "react";
import Input from "../input";
import './radio.scss'
import TickIcon from "../svg/tickIcon";
import Icon from "../icon";

const Radio = props => {
    return(
        <div className={`form-radio ${props.active ? 'active' : '' } ${props?.mb0 ? 'mb-0' : ''}`}>
            <Input
                {...props}
                className="form-radio-input"
                type="radio"
                value={props.value}
                id={props.id}
            />
            <span className={props.active ? 'circle circle-active' : 'circle'}></span>
            <label className="form-radio-label" for={props.id}>
                {props.text}
            </label>
        </div>
    )
}

export default Radio;
