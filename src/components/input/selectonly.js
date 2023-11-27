import React from 'react';
import './input.scss'

const Selectonly = props => {
    return (
        <div className={`form-field form-field-select ${props.secondary ? 'form-field-secondary' : ''} ${props.label ? 'no-label' : ''}`}>
            {props.label && <label className={`form-label`}>{props.label} {props.mandatory && <span className="text-danger">*</span>}</label>}
            <select
                className={`form-control ${props.value ? 'form-control-value' : ''} ${props.formControlClassName ? props.formControlClassName : ''} ${props.errormessage ? 'error' : ''}`}
                name={props.name}
                value={props.value}
                id={props.id}
                onChange={props.onChange}
                disabled={props.disabled}
                required={props.required}
                multiple={props.multiple}
            >
                <option value={""}>Select</option>
                {props?.options?.map((x,y) => <option key={y} value={x.value}>{x.label}</option>)}
            </select>
            {props.icon && <div className="form-icon">{props.icon}</div>}
            {props.errormessage && <div className="message-error"><small>{props.errormessage}</small></div>}
        </div>
    );
};

export default Selectonly;
