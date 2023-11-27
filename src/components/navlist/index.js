
import React from 'react';
import { NavLink } from "react-router-dom";
import '../navlist/navlist.scss'

const NavList = props => {
    return (
        <>
            <div className="navlist-wrp">
                <ul className={`nav ${props.className ? props.className : ''}`}>
                    {props.options.map(function(d, idx){
                        if(d?.isActionButton) {
                            return (
                                <>
                                    <li className="nav-item" onClick={d?.onClickAction}>
                                        <span className="nav-link pointer">{d.text}</span>
                                    </li>
                                </>
                            )

                        } else {
                            return (
                                <>
                                    <li className="nav-item">
                                        <NavLink key={idx} to={d.link} activeClassName="active" className="nav-link">
                                            {d.text}
                                        </NavLink>
                                    </li>
                                </>
                            )
                        }

                    })}
                </ul>
            </div>
        </>
    );
};

export default NavList;

NavList.defaultProps = {
    options: [
        {
            text:"Something 1",
            link: "/"
        },
        {
            text:"Something 2",
            link: "/"
        },
        {
            text:"Something 3",
            link: "/"
        },
    ]
};
