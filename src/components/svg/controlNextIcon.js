import React from 'react';

const ControlNextIcon = props => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.62 1.48926L12.2067 7.22259C12.7025 7.57585 12.9969 8.1471 12.9969 8.75593C12.9969 9.36475 12.7025 9.93599 12.2067 10.2893L4.62 16.5559C3.979 17.0684 3.10867 17.1883 2.353 16.8682C1.59732 16.5481 1.07789 15.8396 1 15.0226V3.02259C1.07789 2.20563 1.59732 1.49709 2.353 1.177C3.10867 0.856918 3.979 0.976796 4.62 1.48926Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.9987 1.02246V17.0225" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
    );
};

export default ControlNextIcon;

ControlNextIcon.defaultProps = {
    width: '18',
    height: '18',
}