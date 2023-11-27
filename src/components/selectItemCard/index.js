import React from "react";
import Icon from "../icon";
import Image from "../image";
import './selectItemCard.scss'
import TickIcon from '../svg/tickIcon'
import Text from "../text";
import { useState } from "react";

const SelectItemCard = props => {
    const [selectItem, setSelectItem] = useState(false);
    const onSelect = () => {
        setSelectItem(state => !state)
        props?.setSelectedOptions(!selectItem, props?.answerId)
    }
    return(
        <div className="select-item-box">
            <div className={`select-item-card ${selectItem ? 'selected' : ''} `} onClick={onSelect}>
                <Image src={props.src} alt={props.text} />
                <div className="select-item-content">
                    {selectItem &&
                        <div className="select-item-icon">
                            <Icon
                                icon={<TickIcon />}
                                small
                            />
                        </div>
                    }
                    {props.text && <Text type="H4" text={props.text} className="select-item-title" />}
                </div>
            </div>
        </div>
    )
}

export default SelectItemCard;

SelectItemCard.defaultProps = {
    src: "https://picsum.photos/600",
}
