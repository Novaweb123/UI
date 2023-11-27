import React from 'react';

const ChevronDownIcon = props => {
    return (
        <svg style={{transform: props.up ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform ease-in 0.2s'}} width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.939 0.938965L7.99996 5.87896L3.06096 0.938965L0.938965 3.06096L7.99996 10.121L15.061 3.06096L12.939 0.938965Z" fill="currentColor"/>
        </svg>
    );
};

export default ChevronDownIcon;