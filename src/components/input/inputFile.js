import React from 'react';
import GalleryIcon from '../svg/galleryIcon';
import Text from '../text';
import './input.scss'
import './inputFile.scss'

const InputFile = props => {
    return (
        <div className={`form-field form-field-file ${props.secondary ? 'form-field-secondary' : ''}`}>
            {props.label && <label className={`form-label`}>{props.label} {props.mandatory && <span className="text-danger">*</span>}</label>}
            <div className="upload-content">
                <input
                    className={`form-control ${props.formControlClassName ? props.formControlClassName : ''} ${props.errormessage ? 'error' : ''}`}
                    type={props.type}
                    name={props.name}
                    value={props.value}
                    id={props.id}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    readOnly={props.readonly}
                    disabled={props.disabled}
                    required={props.required}
                    autoFocus={props.autoFocus}
                />            
                <div className="icon">
                    <GalleryIcon />
                </div>
                <Text type="SPAN" text="Upload Photo" />
            </div>
            {props.errormessage && <div className="message-error"><small>{props.errormessage}</small></div>}
        </div>
    );
};

export default InputFile;
