import React from 'react';
import './image.scss';

const Image = props => {
    return (
        <div className="image-element"><img src={props.src} alt={props.alt} id={props.id} className={props.widthFull ? 'width-100 img-fluid' : 'img-fluid'} /></div>
    );
};

export default Image;
