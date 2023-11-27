import React from "react";
import Icon from "../icon";
import Image from "../image";
import './selectItemTickCard.scss';
import TickIcon from '../svg/tickIcon';

const SelectItemTickCard = props => {
    return(
        <div 
            className={`${props.selected ? 'selected' : ''} image-item-tick`}
            onClick={props.onClick}
        >
            {props.selected &&
                <div className="image-item-tick-icon">
                    <Icon
                        icon={<TickIcon />}
                        small
                    />
                </div>
            }
            <Image
                src={props.src}
                alt={props.alt}
            />
        </div>
    )
}

export default SelectItemTickCard;