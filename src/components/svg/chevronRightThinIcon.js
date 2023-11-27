import React from 'react';

const ChevronRightThinIcon = props => {
    return (
        <svg style={{transform: props.down ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform ease-in 0.2s'}} width={props.width} height={props.height} viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.769531 1.6001L5.76953 6.6001L0.769531 11.6001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>        
    );
};

export default ChevronRightThinIcon;

ChevronRightThinIcon.defaultProps = {
    width: '7',
    height: '13'
}