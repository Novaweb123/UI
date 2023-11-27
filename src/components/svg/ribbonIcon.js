import React from 'react';

const RibbonIcon = props => {
    return (
        <svg width="43" height="48" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M43 48L21.5 33.913L0 48V0H43V48Z" fill={props.bgcolor} />
        </svg>
    );
};

export default RibbonIcon;