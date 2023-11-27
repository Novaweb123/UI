import React from 'react';

const FileDownloadIcon = props => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.33398 21.6666C1.80065 21.6666 1.33398 21.4666 0.933984 21.0666C0.533984 20.6666 0.333984 20.1999 0.333984 19.6666V14.8999H2.33398V19.6666H19.6673V14.8999H21.6673V19.6666C21.6673 20.1999 21.4673 20.6666 21.0673 21.0666C20.6673 21.4666 20.2007 21.6666 19.6673 21.6666H2.33398ZM11.0007 16.5666L4.56732 10.1333L6.00065 8.69992L10.0007 12.6999V0.333252H12.0007V12.6999L16.0007 8.69992L17.434 10.1333L11.0007 16.5666Z" fill="currentColor"/>
        </svg>        
    );
};

export default FileDownloadIcon;

FileDownloadIcon.defaultProps = {
    width: '22',
    height: '22'
}