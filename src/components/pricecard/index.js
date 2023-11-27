import React from "react";
import './pricecard.scss';
import Text from "../text";
import Icon from "../icon";
import TickIcon from "../svg/tickIcon";
import RibbonIcon from "../svg/ribbonIcon";

const PriceCard = props => {
    return(
        <div className={`price-box ${props.active ? 'active' : ''}`}>
            <div className="price-card">
                <span className="tag-ribbon">
                    {props.active ? 
                        <svg width="69" height="117" viewBox="0 0 69 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M69 117L34.5 82.663L0 117V0H69V117Z" fill="#FFC943"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M39.0068 32.4491L35.0007 24.8333L30.9945 32.4491C30.7115 33.0056 30.3018 33.488 29.7985 33.8574C29.2927 34.2287 28.7074 34.4772 28.089 34.5833L19.834 36.2018L25.5973 43.0939C26.3855 43.9577 26.7574 45.1225 26.6157 46.2833L25.5193 55.1666L33.12 51.4833C33.7063 51.1993 34.3492 51.0512 35.0007 51.0499C35.6119 51.0518 36.2138 51.2004 36.7557 51.4833L44.534 54.9391L43.4377 46.1619C43.2991 45.0037 43.6716 43.8426 44.4582 42.9813L50.1673 36.2018L41.9123 34.5833C41.2931 34.4776 40.7071 34.229 40.2007 33.8574C39.6981 33.4877 39.2892 33.0054 39.0068 32.4491Z" stroke="#FFF5DB" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        :
                        <RibbonIcon bgcolor={props.bgcolor} />
                    }
                </span>
                <Text type="H1" text={props.title} />
                {props.free && <Text type="H2" text="Percuma" />}
                {props.monthly && <h2>{props.monthly} <span>/ BULANAN</span></h2>}
                <Text type="PARAGRAPH" text="Manfaat" />
                <ul>
                    {props.list.map(function(d, idx){
                        return (
                            <li className="list-item" key={idx}>
                                <Icon
                                    success
                                    small
                                    icon={<TickIcon />}
                                />
                                <div className="list-item-text">
                                    <strong>{d.title}</strong>
                                    <Text type="SPAN" text={d.desc} />
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
export default PriceCard;