import React from 'react';

const TickIcon = props => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5.5L5.667 10L15 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
};

export default TickIcon;

TickIcon.defaultProps = {
    width: '16',
    height: '11'
}