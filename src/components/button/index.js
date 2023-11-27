import React from 'react';
import './button.scss';
import Loading from "../svg/loading";

const Button = props => {
    return (
        <>
            <button
                className={`btn ${props.className ? props.className : ''} ${props.disabled ? 'btn-disabled' : props.linkWhite ? 'btn-link-white' : props.linkSecondary ? 'btn-link-secondary' : props.linkPrimary ? 'btn-link-primary' : props.linkLittle ? 'btn-link-little' : props.link ? 'btn-link' : props.inactive ? 'btn-inactive' : props.active ? 'btn-active' :  props.dark ? 'btn-dark' : props.light ? 'btn-light' : props.danger ? 'btn-danger' : props.success ? 'btn-success' : props.secondary ? 'btn-secondary' : 'btn-primary'} ${props.outline ? 'btn-outline' : ''} ${props.large ? 'btn-large' : props.small ? 'btn-small' : ''}`}
                type={props.type}
                onClick={props.onClick}
                disabled={props.disabled}
                name={props.name}
                style={props.style}
            >
                {props.isSubmitting && <span className="loading"><Loading/></span> }
                {props.iconLeft && <span className="btn-icon-left">{props.iconLeft}</span>}
                {props.text}
                {props.icon && <span className="btn-icon">{props.icon}</span>}
            </button>
        </>
    );
};

export default Button;

Button.defaultProps = {
    text: "Button"
}
