import React from 'react';

const DashboardIcon = props => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.418 7.00054H2.582C2.16587 6.99708 1.76541 7.15907 1.46873 7.45088C1.17204 7.74269 1.00343 8.14041 1 8.55654V14.4455C1.0077 15.3117 1.71584 16.0078 2.582 16.0005H5.418C5.83413 16.004 6.23459 15.842 6.53127 15.5502C6.82796 15.2584 6.99657 14.8607 7 14.4445V8.55654C6.99657 8.14041 6.82796 7.74269 6.53127 7.45088C6.23459 7.15907 5.83413 6.99708 5.418 7.00054Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.418 1.0006H2.582C1.73326 0.977062 1.02559 1.64492 1 2.4936V3.5076C1.02559 4.35629 1.73326 5.02415 2.582 5.0006H5.418C6.26674 5.02415 6.97441 4.35629 7 3.5076V2.4936C6.97441 1.64492 6.26674 0.977062 5.418 1.0006Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.582 10.0005H13.417C13.8333 10.0043 14.234 9.8424 14.5309 9.55056C14.8278 9.25872 14.9966 8.86085 15 8.44454V2.55654C14.9966 2.14041 14.828 1.74269 14.5313 1.45088C14.2346 1.15907 13.8341 0.997081 13.418 1.00054H10.582C10.1659 0.997081 9.76541 1.15907 9.46873 1.45088C9.17204 1.74269 9.00343 2.14041 9 2.55654V8.44454C9.00343 8.86067 9.17204 9.25839 9.46873 9.5502C9.76541 9.84201 10.1659 10.004 10.582 10.0005Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.582 16.0006H13.417C14.2661 16.0247 14.9744 15.3567 15 14.5076V13.4936C14.9744 12.6449 14.2667 11.9771 13.418 12.0006H10.582C9.73326 11.9771 9.02559 12.6449 9 13.4936V14.5066C9.02505 15.3557 9.73288 16.0241 10.582 16.0006Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
};

export default DashboardIcon;

DashboardIcon.defaultProps = {
    width: '16',
    height: '17'
}