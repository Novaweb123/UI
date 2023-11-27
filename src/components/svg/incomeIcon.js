import React from 'react';

const IncomeIcon = props => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.725 5.475C4.925 5.475 5.1 5.4 5.25 5.25C5.4 5.1 5.475 4.925 5.475 4.725C5.475 4.525 5.4 4.35 5.25 4.2C5.1 4.05 4.925 3.975 4.725 3.975C4.525 3.975 4.35 4.05 4.2 4.2C4.05 4.35 3.975 4.525 3.975 4.725C3.975 4.925 4.05 5.1 4.2 5.25C4.35 5.4 4.525 5.475 4.725 5.475ZM4.725 9.75C4.925 9.75 5.1 9.675 5.25 9.525C5.4 9.375 5.475 9.2 5.475 9C5.475 8.8 5.4 8.625 5.25 8.475C5.1 8.325 4.925 8.25 4.725 8.25C4.525 8.25 4.35 8.325 4.2 8.475C4.05 8.625 3.975 8.8 3.975 9C3.975 9.2 4.05 9.375 4.2 9.525C4.35 9.675 4.525 9.75 4.725 9.75ZM4.725 14.025C4.925 14.025 5.1 13.95 5.25 13.8C5.4 13.65 5.475 13.475 5.475 13.275C5.475 13.075 5.4 12.9 5.25 12.75C5.1 12.6 4.925 12.525 4.725 12.525C4.525 12.525 4.35 12.6 4.2 12.75C4.05 12.9 3.975 13.075 3.975 13.275C3.975 13.475 4.05 13.65 4.2 13.8C4.35 13.95 4.525 14.025 4.725 14.025ZM1.5 18C1.1 18 0.75 17.85 0.45 17.55C0.15 17.25 0 16.9 0 16.5V1.5C0 1.1 0.15 0.75 0.45 0.45C0.75 0.15 1.1 0 1.5 0H13.05L18 4.95V16.5C18 16.9 17.85 17.25 17.55 17.55C17.25 17.85 16.9 18 16.5 18H1.5ZM1.5 16.5H16.5V5.775H12.225V1.5H1.5V16.5ZM1.5 1.5V5.775V1.5V16.5V1.5Z" fill="currentColor"/>
        </svg>        
    );
};

export default IncomeIcon;

IncomeIcon.defaultProps = {
    width: '18',
    height: '18'
}