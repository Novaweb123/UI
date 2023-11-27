import React from 'react';
import "./avatar.scss"

const Avatar = props => {
    return (
        <div
            className={`avatar ${props.w100 ? 'avatar-100' : props.large ? 'avatar-48' : 'avatar-40'}`}
            style={{maxWidth: props?.width + 'px' , maxHeight: props?.height  + 'px'}}
        >
            {props.src && (
                <img src={props.src} alt={props.alt}  />
            )}
        </div>
    );
};



export default Avatar;

Avatar.defaultProps = {
    src: "https://picsum.photos/48",
    alt: "Avatar",
}
