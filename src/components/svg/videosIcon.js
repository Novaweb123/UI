import React from 'react';

const VideosIcon = props => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.24 9.13125L11.44 5.9625L6.24 2.79375V9.13125ZM1.2 12C0.88 12 0.6 11.8875 0.36 11.6625C0.12 11.4375 0 11.175 0 10.875V1.125C0 0.825 0.12 0.5625 0.36 0.3375C0.6 0.1125 0.88 0 1.2 0H14.8C15.12 0 15.4 0.1125 15.64 0.3375C15.88 0.5625 16 0.825 16 1.125V10.875C16 11.175 15.88 11.4375 15.64 11.6625C15.4 11.8875 15.12 12 14.8 12H1.2ZM1.2 10.875H14.8V1.125H1.2V10.875ZM1.2 10.875V1.125V10.875Z" fill="currentColor"/>
        </svg>
    );
};

export default VideosIcon;

VideosIcon.defaultProps = {
    width: '16',
    height: '12'
}