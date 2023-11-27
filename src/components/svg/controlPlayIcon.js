import React from 'react';

const ControlPlayIcon = props => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.03622 1.70053L7.4323 5.41531C7.71988 5.64436 7.89062 6.01474 7.89062 6.40949C7.89062 6.80424 7.71988 7.17462 7.4323 7.40367L3.03235 11.4669C2.66093 11.7966 2.15807 11.8731 1.7213 11.6665C1.28453 11.4598 0.983624 11.0029 0.936775 10.4753L0.936775 2.69471C0.981949 2.165 1.2832 1.7056 1.72146 1.49807C2.15972 1.29053 2.66447 1.36826 3.03622 1.70053Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
};

export default ControlPlayIcon;

ControlPlayIcon.defaultProps = {
    width: '9',
    height: '13',
}