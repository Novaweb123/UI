import React from 'react';
import MalaysiaFlagImage from '../../assets/images/malaysia-flag.png'
import Image from '../image';
import './language.scss';

const Language = () => {
    return (
        <>
            <div className="language-wrapper">
                <label>GURU</label>
                <Image
                    src={MalaysiaFlagImage}
                    alt="malaysia" 
                />
            </div>
        </>
    );
};

export default Language;
