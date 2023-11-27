import React from 'react';

const ControlSoundIcon = props => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.02325 8.12165C1.34885 8.07258 0.836673 7.42348 0.877254 6.66928V4.42156C0.836673 3.66736 1.34885 3.01826 2.02325 2.96919H2.87849C3.13487 2.96739 3.38203 2.86208 3.57444 2.67267L4.76761 1.52201C5.13033 1.20247 5.62949 1.15857 6.03244 1.41078C6.43539 1.66298 6.66284 2.16166 6.60878 2.6744V8.41645C6.66284 8.92918 6.43539 9.42786 6.03244 9.68006C5.62949 9.93227 5.13033 9.88837 4.76761 9.56883L3.5729 8.41817C3.38048 8.22876 3.13332 8.12345 2.87695 8.12165H2.02325Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.1405 1.16453C10.9091 0.820974 10.443 0.73004 10.0995 0.961426C9.75591 1.19281 9.66498 1.6589 9.89637 2.00246L11.1405 1.16453ZM9.89637 9.08946C9.66498 9.43302 9.75591 9.89911 10.0995 10.1305C10.443 10.3619 10.9091 10.2709 11.1405 9.92739L9.89637 9.08946ZM9.18771 2.11627C8.93479 1.78824 8.46384 1.72735 8.1358 1.98026C7.80777 2.23318 7.74688 2.70413 7.99979 3.03217L9.18771 2.11627ZM7.99979 8.05975C7.74688 8.38779 7.80777 8.85874 8.1358 9.11166C8.46384 9.36457 8.93479 9.30368 9.18771 8.97565L7.99979 8.05975ZM9.89637 2.00246C11.306 4.09547 11.306 6.99645 9.89637 9.08946L11.1405 9.92739C12.8913 7.32784 12.8913 3.76408 11.1405 1.16453L9.89637 2.00246ZM7.99979 3.03217C9.10841 4.47005 9.10841 6.62187 7.99979 8.05975L9.18771 8.97565C10.7124 6.99806 10.7124 4.09386 9.18771 2.11627L7.99979 3.03217Z" fill="white"/>
        </svg>
    );
};

export default ControlSoundIcon;

ControlSoundIcon.defaultProps = {
    width: '13',
    height: '11',
}