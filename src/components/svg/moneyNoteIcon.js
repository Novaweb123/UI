import React from 'react';

const MoneyNoteIcon = props => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.75 23.75C29.6667 23.75 27.8958 23.0208 26.4375 21.5625C24.9792 20.1042 24.25 18.3333 24.25 16.25C24.25 14.1667 24.9792 12.3958 26.4375 10.9375C27.8958 9.47917 29.6667 8.75 31.75 8.75C33.8333 8.75 35.6042 9.47917 37.0625 10.9375C38.5208 12.3958 39.25 14.1667 39.25 16.25C39.25 18.3333 38.5208 20.1042 37.0625 21.5625C35.6042 23.0208 33.8333 23.75 31.75 23.75ZM11.75 32.5C10.7083 32.5 9.82292 32.1354 9.09375 31.4062C8.36458 30.6771 8 29.7917 8 28.75V3.75C8 2.70833 8.36458 1.82292 9.09375 1.09375C9.82292 0.364583 10.7083 0 11.75 0H51.75C52.7917 0 53.6771 0.364583 54.4062 1.09375C55.1354 1.82292 55.5 2.70833 55.5 3.75V28.75C55.5 29.7917 55.1354 30.6771 54.4062 31.4062C53.6771 32.1354 52.7917 32.5 51.75 32.5H11.75ZM18 28.75H45.5C45.5 27 46.1042 25.5208 47.3125 24.3125C48.5208 23.1042 50 22.5 51.75 22.5V10C50 10 48.5208 9.39583 47.3125 8.1875C46.1042 6.97917 45.5 5.5 45.5 3.75H18C18 5.5 17.3958 6.97917 16.1875 8.1875C14.9792 9.39583 13.5 10 11.75 10V22.5C13.5 22.5 14.9792 23.1042 16.1875 24.3125C17.3958 25.5208 18 27 18 28.75ZM48 40H4.25C3.20833 40 2.32292 39.6354 1.59375 38.9062C0.864583 38.1771 0.5 37.2917 0.5 36.25V7.5H4.25V36.25H48V40ZM11.75 28.75V3.75V28.75Z" fill="#2E5A51"/>
        </svg>             
    );
};

export default MoneyNoteIcon;

MoneyNoteIcon.defaultProps = {
    width: '56',
    height: '40'
}