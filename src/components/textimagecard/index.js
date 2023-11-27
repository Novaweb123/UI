import React from "react";
import Button from "../button";
import Image from "../image";
import Text from "../text";
import './textimagecard.scss'

const TextImageCard = props => {
    return(
        <div className="textimage-card">
            <Image src={props.src} alt={props.alt} />
            <div className="textimage-content">
                <Text type="H1" text={props.title} className="textimage-title" />
                <Text type="PARAGRAPH" text={props.description} className="textimage-desc" />
                <Button text="DAFTAR" large />
            </div>
        </div>
    )
}

export default TextImageCard;