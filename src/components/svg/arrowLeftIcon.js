import React from 'react';

const ArrowleftIcon = props => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 30 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM30 10.5L2 10.5V13.5L30 13.5V10.5Z"/>
        </svg>
    );
};

export default ArrowleftIcon;

ArrowleftIcon.defaultProps = {
    width: '30',
    height: '24'
}