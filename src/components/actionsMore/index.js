import React from "react";
import { useState } from "react";
import NavList from "../navlist";
import MoreHorizontalIcon from "../svg/moreHorizontalIcon";
import './actionsMore.scss';

const ActionMore = props => {
    const [ more, setMore ] = useState(false);
    const ToggleMore = () => {
        setMore(state => !state)
    }
    const onOuterClose = () => {
        setMore(false)
    }
    return(
        <div className="action-more-wrapper">
            <span className="action-more-toggle" onClick={ToggleMore}>
                <MoreHorizontalIcon />
            </span>
            {more && <>
                <div className="action-more-dropdown">
                    <div className="backdrop" onClick={onOuterClose}></div>
                    <NavList
                        options={props.optionsAction}
                        className="actionmore-list" 
                    />
                </div>
            </>}
        </div>
    )
}

export default ActionMore;