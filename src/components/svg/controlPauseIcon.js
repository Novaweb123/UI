import React from 'react';

const ControlPauseIcon = props => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33206 3.1665V10.8332C1.32958 11.2285 1.48425 11.6087 1.76206 11.89C2.03986 12.1713 2.41804 12.3307 2.81339 12.3332H4.29473C4.69008 12.3307 5.06826 12.1713 5.34606 11.89C5.62387 11.6087 5.77854 11.2285 5.77606 10.8332V3.1665C5.77854 2.77115 5.62387 2.39101 5.34606 2.1097C5.06826 1.82839 4.69008 1.66897 4.29473 1.6665H2.81339C2.41804 1.66897 2.03986 1.82839 1.76206 2.1097C1.48425 2.39101 1.32958 2.77115 1.33206 3.1665Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2227 3.1665V10.8332C10.2202 11.2285 10.3749 11.6087 10.6527 11.89C10.9305 12.1713 11.3087 12.3307 11.704 12.3332H13.1854C13.5807 12.3307 13.9589 12.1713 14.2367 11.89C14.5145 11.6087 14.6692 11.2285 14.6667 10.8332V3.1665C14.6692 2.77115 14.5145 2.39101 14.2367 2.1097C13.9589 1.82839 13.5807 1.66897 13.1854 1.6665H11.704C11.3087 1.66897 10.9305 1.82839 10.6527 2.1097C10.3749 2.39101 10.2202 2.77115 10.2227 3.1665V3.1665Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
};

export default ControlPauseIcon;

ControlPauseIcon.defaultProps = {
    width: '16',
    height: '14',
}