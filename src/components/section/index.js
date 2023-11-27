import React from 'react';
import './section.scss'

const Section = props => {
    return (
        <section className={`section-wrapper ${props.className ? props.className : ''}`}>
            <div className="container">
                {props.children}
            </div>
        </section>
    );
};

export default Section;
