import React from "react";
import './flex.scss'

const Flex = props => {
    return(
        <div
            className={`flex-class d-flex ${props.alignItemsCenter ? 'align-items-center' : ''} ${props.flexColumn ? 'flex-column' : ''} ${props.className ? props.className : ''} ${props.justifyContent === "start" ? 'justify-content-start' : ''} ${props.justifyContent === "end" ? 'justify-content-end' : ''} ${props.justifyContent === "center" ? 'justify-content-center' : ''} ${props.justifyContent === "between" ? 'justify-content-between' : ''} ${props.justifyContent === "around" ? 'justify-content-around' : ''} ${props.justifyContent === "evenly" ? 'justify-content-evenly' : ''}`}
        >
            {props.children}
        </div>
    )
}

export default Flex;