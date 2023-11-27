import React from 'react';
import './input.scss'

const   Input = props => {
    return (
        <div className={`form-field ${props.secondary ? 'form-field-secondary' : ''}`}>
            {props.label && <label className={`form-label`}>{props.label} {props.mandatory && <span className="text-danger">*</span>}</label>}
            <input
                className={`form-control ${props.value ? 'form-control-value' : ''} ${props.formControlClassName ? props.formControlClassName : ''} ${props.errormessage ? 'error' : ''} ${props.readonly ? 'form-control-readonly' : ''}`}
                type={props.type}
                name={props.name}
                value={props.value}
                id={props.id}
                min={props.min}
                placeholder={props.placeholder}
                onChange={props.onChange}
                readOnly={props.readonly}
                disabled={props.disabled}
                required={props.required}
                autoFocus={props.autoFocus}
                maxLength={props.maxlength}
                onKeyDown={props.onKeyDown}
                onKeyUp={props.onKeyUp}
                style={props.style}
            />
            {props.icon && <div className="form-icon">{props.icon}</div>}
            {props.errormessage && <div className="message-error"><small>{props.errormessage}</small></div>}
        </div>
    );
};

export default Input;
