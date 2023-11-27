import React from 'react';
import './icon.scss';

const Icon = props => {
    return (
        <div className={`icon ${props.square ? 'square' : 'circle'} ${props.extralarge ? 'extra-large' : props.extra ? 'extra' : props.large ? 'large' : props.small ? 'small' : props.smallExtra ? 'extra-small' : props.size32 ? 'size-32' : ''} ${props.danger ? 'bg-danger' : props.rejected ? 'bg-rejected' : props.approved ? 'bg-approved' : props.success ? 'bg-success' : props.pending ? 'bg-pending' : props.dark ? 'bg-dark' : props.light ? 'bg-light' : props.white ? 'bg-white' : props.cyan ? 'bg-green-cyan' : props.gray ? 'bg-gray' : 'bg-primary'}`}>
            {props.icon}
        </div>
    );
};

export default Icon;