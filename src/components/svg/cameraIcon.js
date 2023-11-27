import React from 'react';

const CameraIcon = props => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 6.20001V10.533C1.00423 11.4569 1.3754 12.3413 2.0318 12.9915C2.68821 13.6418 3.57608 14.0045 4.5 14H11.5C12.4239 14.0045 13.3118 13.6418 13.9682 12.9915C14.6246 12.3413 14.9958 11.4569 15 10.533V6.20001C14.9958 5.27608 14.6246 4.39169 13.9682 3.74148C13.3118 3.09126 12.4239 2.72849 11.5 2.73301C11.0147 2.66864 10.6001 2.3515 10.411 1.90001C10.1009 1.34285 9.51263 0.998146 8.875 1.00001H7.125C6.48737 0.998146 5.89908 1.34285 5.589 1.90001C5.39986 2.3515 4.98526 2.66864 4.5 2.73301C3.57608 2.72849 2.68821 3.09126 2.0318 3.74148C1.3754 4.39169 1.00423 5.27608 1 6.20001Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99756 10.5331C6.80343 10.5215 5.84373 9.54608 5.85161 8.35192C5.85949 7.15776 6.83198 6.19504 8.02616 6.19923C9.22034 6.20342 10.1861 7.17293 10.1856 8.36712C10.1827 8.9445 9.9505 9.49707 9.54016 9.90328C9.12983 10.3095 8.57494 10.536 7.99756 10.5331Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
};

export default CameraIcon;

CameraIcon.defaultProps = {
    width: '16',
    height: '15'
}