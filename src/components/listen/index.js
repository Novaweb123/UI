import React from "react";
import './listen.scss';

const Listen = props => {
    return(
        <ul className="listen-ul">
            {props.listen.map(function(item, idx){
                return (
                    <li key={idx}>
                        {item}
                    </li>
                )
            })}
        </ul>
    )
}

export default Listen;

Listen.defaultProps = {
    listen: ['Somethings', 'Somethings']
}